import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import './ListingEdit.css';
import { storage } from './../../../firebaseConfig/firebaseConfig.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import * as listingService from './../../../services/listingService.js';
import { useNotificationContext } from './../../../contexts/NotificationContext.js';

import { errorInitialValue } from '../../../validations/listingFormValidations.js';
import { titleValidationHandler } from '../../../validations/listingFormValidations.js'
import { descriptionValidationHandler } from '../../../validations/listingFormValidations.js'
import { categoryValidationHandler } from '../../../validations/listingFormValidations.js'
import { priseValidationHandler } from '../../../validations/listingFormValidations.js'
import { submitFormValidation } from '../../../validations/listingFormValidations.js'

import ValidationError from './../../Common/Errors/ValidationError.js';


let categoriesLib = {
    "jewellery-and-accessories": 'Jewellery and Accessories',
    "clothes-and-shoes": 'Clothes and Shoes',
    "home-and-living": 'Home and Living',
    "wedding-and-party": 'Wedding and Party',
    "toys-and-entertainment": 'Toys and Entertainment',
    "art-and-collectibles": 'Art and Collectibles',
}

function ListingEdit({ history, match }) {
    const { showNotification } = useNotificationContext();
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(errorInitialValue);
    const [listing, setListing] = useState({});

    let listingId = match.params.listingId;

    useEffect(() => {
        window.scrollTo(0, 0);
        listingService.getOnePopulated(listingId)
            .then(result => {
                setListing(result);
            })
    }, [listingId]);

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
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0])
    }

    const updatePostHandler = (e) => {
        e.preventDefault();

        let postData = Object.fromEntries(new FormData(e.currentTarget));
        postData.imageUrl = listing.imageUrl;
        
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
                            setProgress(0);
                            postData.imageUrl = dataUrl;
                            return listingService.updateItem(listingId, postData)
                        })
                        .then(result => {
                            showNotification('Your listing was successfully updated', 'success');
                            return history.push(`/listing/${listingId}`)
                        });
                }
            );

        } else if (!imageFile) {
            listingService.updateItem(listingId, postData)
                .then(result => {
                    showNotification('Your listing was successfully updated', 'success');
                    return history.push(`/listing/${listingId}`)
                });
        } else {
            setError('Unable to update this listing. Your session has expired. Please login to your profile and try again')
        }
    }

    const changeCategoryHandler = (e) => {
        setListing(oldState => ({ ...oldState, category: e.target.value }))
    };

    return (
        <section className="create-form-section">
            <div className="container">
                <div className="col-10 create-form-wrapper">
                    <h2>Add New Post</h2>
                    <form className="create-form row" onSubmit={updatePostHandler} >

                        <div className="input-wrapper col-12 col-md-5">
                            <div className="image-preview">

                                {error.file
                                    ? <ValidationError message={error.file} />
                                    : <img src={image || listing.imageUrl} alt="" style={{ width: "100%", height: "100%" }} />
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
                                onChange={imagePreviewHandler} />
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
                                    defaultValue={listing.title}
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
                                    defaultValue={listing.description}
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
                                    value={listing.category} 
                                    onChange={changeCategoryHandler}
                                    onBlur={categoryValidationHandler.bind(null, addError)}
                                >
                                    {Object.keys(categoriesLib).map(key => <option key={key} value={key}>{categoriesLib[key]}</option>)}
                                </select>
                                {error.category ? <ValidationError message={error.category} /> : null}
                            </div>


                            <div className="input-wrapper">
                                <label htmlFor="prise">
                                    Prise <span className='required'>*</span>
                                </label>
                                <input 
                                    type="prise" 
                                    id="prise" 
                                    name="prise" 
                                    defaultValue={listing.prise}
                                    autoComplete='off'
                                    onBlur={priseValidationHandler.bind(null, addError)} 
                                />
                                {error.prise ? <ValidationError message={error.prise} /> : null}
                            </div>
                            <input type="submit" value="Update" />
                            <Link to={`/listing/${listing._id}`} className='warrning' >Go back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ListingEdit;

