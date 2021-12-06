import React, { useState, useContext } from 'react';
import { storage } from '../../firebaseConfig/firevaseConfig.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import './PostEdit.css';
import * as postService from '../../services/postService';
import AuthContext from './../../contexts/AuthContext.js';
import PostContext from './../../contexts/PostContext.js';

function PostEdit({
    history,
}) {
    const { user } = useContext(AuthContext);
    const { post } = useContext(PostContext);
    const [image, setImage] = useState('https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'); //TODO Edit the defailt photo
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileType = file['type'];
            const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

            if (validImageTypes.includes(fileType)) {
                setError("");
                setImageFile(file);
            } else {
                setError('Please select an image file to upload.')
            }
        }

        const reader = new FileReader();
        // console.log(reader.onload);
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0])
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
            author: user._id,
            imageUrl: '',
        }

        if (imageFile) {
            const storageRef = ref(storage, `posts-images/ + ${imageFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, imageFile);

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
                        .then(dataUrl => {
                            // setUrl(dataUrl);
                            setProgress(0);
                            postData.imageUrl = dataUrl;
                            postService.addItem(postData)
                                .then(result => {
                                    return history.push('/')
                                });
                        });
                }
            );

        } else {
            setError("Ups! You forgot to select an image to upload.")
        }
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
                                    : <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
                                }

                            </div>
                            <label htmlFor="upload-image">Image</label>
                            {progress > 0 ? <progress value={progress} max="100" /> : ""}
                            <input type="file" id="upload-image" name="uploadImage" accept="image/*" onChange={changeHandler} />
                            {/* <button onClick={uploadImageHandler}>Upload</button> */}
                        </div>


                        <div className="col-6">
                            <div className="input-wrapper">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" value={post.title} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="description">Description</label>
                                <textarea type="text" id="description" name="description" placeholder="Short description..." value={post.description}></textarea>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="category">Category</label>
                                <input type="category" id="category" name="category" value={post.category} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="prise">Prise</label>
                                <input type="prise" id="prise" name="prise" value={post.prise} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="shipping">Shipping</label>
                                <input type="shipping" id="shipping" name="shipping" value={post.shipping} />
                            </div>
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PostEdit;




    // const uploadImageHandler = (e) => {
    //     if (image) {
    //         const storageRef = ref(storage, `posts-images/ + ${image.name}`);
    //         const uploadTask = uploadBytesResumable(storageRef, image);

    //         uploadTask.on("state_change",
    //             (snapshot) => {
    //                 const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //                 setProgress(progress);
    //                 //TODO Progress bar
    //             },

    //             (error) => {
    //                 setError(error)
    //             },

    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref)
    //                     .then(url => {
    //                         setUrl(url);
    //                         setProgress(0);
    //                     });
    //             }
    //         );

    //     } else {
    //         setError("Ups! You forgot to select an image to upload.")
    //     }
    // }