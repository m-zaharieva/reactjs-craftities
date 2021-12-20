import React, { useState, useContext, useEffect } from 'react';
import { storage } from './../../../firebaseConfig/firebaseConfig.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import './ListingEdit.css';
import * as listingService from './../../../services/listingService.js';
import { AuthContext } from './../../../contexts/AuthContext.js';

let categoriesLib ={
    "jewellery-and-accessories": 'Jewellery and Accessories',
    "clothes-and-shoes": 'Clothes and Shoes',
    "home-and-living": 'Home and Living',
    "wedding-and-party": 'Wedding and Party',
    "toys-and-entertainment": 'Toys and Entertainment',
    "art-and-collectibles": 'Art and Collectibles',
}

function ListingEdit({ history, match }) {
    const { user } = useContext(AuthContext);
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [listing, setListing] = useState({});

    let listingId = match.params.listingId;
    useEffect(() => {
        listingService.getOnePopulated(listingId)
            .then(result => {
                setListing(result);
            })
    }, [listingId]);

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
    const updatePostHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let postData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            prise: formData.get('prise'),
            author: user._id,
            imageUrl: listing.imageUrl,
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
                            listingService.updateItem(listingId, postData)
                                .then(result => {
                                    return history.push(`/listing/${listingId}`)
                                });
                        });
                }
            );

        } else if (!imageFile) {
            listingService.updateItem(listingId, postData)
                .then(result => {
                    return history.push(`/listing/${listingId}`)
                });
        } else {
            setError('Unable to update this listing. Your session has expired. Please login to your profile and try again')
        }
    }

    const changeCategoryHandler = (e) => {
        setListing(oldState => ({...oldState, category: e.target.value}))};

    return (
        <section className="create-form-section">
            <div className="container">
                <div className="col-10 create-form-wrapper">
                    <h2>Add New Post</h2>
                    <form className="create-form row" onSubmit={updatePostHandler} >

                        <div className="input-wrapper col-5">
                            <div className="image-preview">

                                {error
                                    ? <p>{error}</p>
                                    : <img src={image || listing.imageUrl} alt="" style={{ width: "100%", height: "100%" }} />
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
                                <input type="text" id="title" name="title" defaultValue={listing.title} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="description">Description</label>
                                <textarea type="text" id="description" name="description" placeholder="Short description..." defaultValue={listing.description}></textarea>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="category">Category</label>
                                <select id="category" name="category" value={listing.category} onChange={changeCategoryHandler}>
                                    {Object.keys(categoriesLib).map(key => <option key={key} value={key}>{categoriesLib[key]}</option>)}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="prise">Prise</label>
                                <input type="prise" id="prise" name="prise" defaultValue={listing.prise} />
                            </div>
                            <input type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ListingEdit;

