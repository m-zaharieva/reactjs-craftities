import React, { useState } from 'react';
import { storage } from '../../firebaseConfig/firevaseConfig.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import * as postService from '../../services/postService';
import './CreatePost.css';

function CreatePost({ history }) {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');


    const changeHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileType = file['type'];
            const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
            if (validImageTypes.includes(fileType)) {
                setError("");
                setImage(file);
            } else {
                setError('Please select an image to upload.')
            }
        }
    }

    const uploadImageHandler = (e) => {

        if (image) {
            const storageRef = ref(storage, `posts-images/ + ${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on("state_change",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                    //TODO Progress bar
                },

                (error) => {
                    setError(error)
                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => {
                            setUrl(url);
                            setProgress(0);
                        });
                }
            );

        } else {
            setError("Ups! You forgot to select an image to upload.")
        }
    }

    // console.log(history);
    const addPostHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let postData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            prise: formData.get('prise'),
            shipping: formData.get('shipping'),
            imageUrl: formData.get('imageUrl'),
        }

        postService.addItem(postData)
            .then(result => {
                console.log(result);
                return history.push('/')
            });

    }

    return (
        <section className="create-form-section">
            <div className="container">
                <div className="col-10 create-form-wrapper">
                    <h2>Add New Post</h2>
                    <form className="create-form row" onSubmit={addPostHandler} >
                        <div className="input-wrapper col-5">
                            <div className="image-preview">
                                {error
                                    ? <p>{error}</p>
                                    : ''}
                            </div>
                            <label htmlFor="imageUrl">Image</label>
                            {progress > 0 ? <progress value={progress} max="100" /> : ""}
                            <input type="file" id="upload-image" name="uploadImage" onChange={changeHandler} />
                            <button onClick={uploadImageHandler}>Upload</button>
                        </div>
                        <div className="col-6">
                            <div className="input-wrapper">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="description">Description</label>
                                <textarea type="text" id="description" name="description" placeholder="Short description..."></textarea>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="category">Category</label>
                                <input type="category" id="category" name="category" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="prise">Prise</label>
                                <input type="prise" id="prise" name="prise" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="shipping">Shipping</label>
                                <input type="shipping" id="shipping" name="shipping" />
                            </div>
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreatePost;