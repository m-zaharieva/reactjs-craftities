import React, { useState } from 'react';
import { storage } from '../../../firebaseConfig/firebaseConfig.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import './ListingCreate.css';
import * as listingService from '../../../services/listingService.js';
import { useNotificationContext } from '../../../contexts/NotificationContext.js'

import { errorInitialValue } from '../../../validations/listingFormValidations.js';
import { titleValidationHandler } from '../../../validations/listingFormValidations.js'
import { descriptionValidationHandler } from '../../../validations/listingFormValidations.js'
import { categoryValidationHandler } from '../../../validations/listingFormValidations.js'
import { priseValidationHandler } from '../../../validations/listingFormValidations.js'
import { submitFormValidation } from '../../../validations/listingFormValidations.js'

import ValidationError from './../../Common/Errors/ValidationError.js';



function CreatePost({ history }) {
    const { showNotification } = useNotificationContext();
    const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/craftities-1f750.appspot.com/o/posts-images%2F%20%2B%20no-image.png?alt=media&token=58d1936a-ce40-4a3f-8671-9eb555a994ea'); //TODO Edit the defailt photo
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(errorInitialValue);

    const addError = (field, message) => {
        setError(oldState => ({ ...oldState, [field]: message }))
    }

    const imagePreviewHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileType = file['type'];
            const validImageTypes = ["image/gif", "image/jpeg", "image/png", "image/svg+xml"];

            if (validImageTypes.includes(fileType)) {
                setError(oldState => ({...oldState, file: false}));
                setImageFile(file);
            } else {
                setError(oldState => ({...oldState, file: 'Oops! It seems we don\'t support this file format. Please, upload JPEG, PNG, GIF or SVG.'}));
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

    const submitFormHandler = (e) => {
        e.preventDefault();
        let postData = Object.fromEntries(new FormData(e.currentTarget));
        
        submitFormValidation(postData, addError);
        
        if (Object.values(error).some(x => x !== false)) {
            return;
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
                            return listingService.addItem(postData)
                        })
                        .then(result => {
                            showNotification('Your listing was added successfully', 'success')
                            return history.push(`/c/${result.category}`)
                        });;
                }
            );

        } else {
            setError((oldState) => ({...oldState, file: "Ups! You forgot to select an image to upload."}))
        }
    }


    return (
        <section className="create-form-section">
            <div className="container">
                <div className="col-10 create-form-wrapper">
                    <h2>Add New Post</h2>
                    <form className="create-form row" onSubmit={submitFormHandler} >

                        {/* Image Upload */}
                        <div className="input-wrapper col-12 col-md-5">
                            <div className="image-preview">

                                {error.file
                                    ? <ValidationError message={error.file} />
                                    : <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
                                }

                            </div>

                            <label htmlFor="upload-image">
                                Image <span className='required'>*</span>
                            </label>
                            {progress > 0 ? <progress value={progress} max="100" /> : ""}
                            <input
                                type="file"
                                id="upload-image"
                                name="uploadImage"
                                accept="image/*"
                                onChange={imagePreviewHandler}
                            />
                        </div>


                        <div className="col-12 col-md-6">
                            {/* Title */}
                            <div className="input-wrapper">
                                <label htmlFor="title">
                                    Title <span className='required'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    autoComplete='off'
                                    onBlur={titleValidationHandler.bind(null, addError)}
                                />
                                {error.title ? <ValidationError message={error.title} /> : null}
                            </div>

                            {/* Description */}
                            <div className="input-wrapper">
                                <label htmlFor="description">
                                    Description <span className='required'>*</span>
                                </label>
                                <textarea
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Short description..."
                                    autoComplete='off'
                                    onBlur={descriptionValidationHandler.bind(null, addError)}
                                >
                                </textarea>
                                {error.description ? <ValidationError message={error.description} /> : null}
                            </div>

                            {/* Category */}
                            <div className="input-wrapper">
                                <label htmlFor="category">
                                    Category <span className='required'>*</span>
                                </label>
                                <select 
                                    id="category" 
                                    name="category" 
                                    onChange={categoryValidationHandler.bind(null, addError)}
                                >
                                    <option value="">---</option>
                                    <option value="jewellery-and-accessories">Jewellery and Accessories</option>
                                    <option value="clothes-and-shoes">Clothes and Shoes</option>
                                    <option value="home-and-living">Home and Living</option>
                                    <option value="wedding-and-party">Wedding and Party</option>
                                    <option value="toys-and-entertainment">Toys and Entertainment</option>
                                    <option value="art-and-collectibles">Art and Collectibles</option>
                                </select>
                                {error.category ? <ValidationError message={error.category} /> : null}
                            </div>

                            {/* Prise */}
                            <div className="input-wrapper">
                                <label htmlFor="prise">
                                    Prise <span className='required'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="prise"
                                    name="prise"
                                    autoComplete='off'
                                    onBlur={priseValidationHandler.bind(null, addError)}
                                />
                            </div>
                            {error.prise ? <ValidationError message={error.prise} /> : null}

                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreatePost;

