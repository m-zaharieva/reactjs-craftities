import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './ListingDetails.css';
import * as listingService from './../../../services/listingService.js';

import ListingDelete from '../ListingDelete/ListingDelete.js';
import Comments from './Comments/Comments.js';
import { useAuth } from '../../../contexts/AuthContext';

function ListingDetails({ match }) {
    const { user } = useAuth();
    let [listing, setListing] = useState({});
    let [deleteDialog, setDeleteDialog] = useState(false);
    // let [error, setError] = useState('');

    let listingId = match.params.listingId;

    useEffect(() => {
        listingService.getOnePopulated(listingId)
            .then(data => {
                setListing(data);
            })
    }, [listingId]);

    const showDialog = (e) => {
        e.preventDefault();
        return setDeleteDialog(true)
    }

    const hideDialog = () => {
        return setDeleteDialog(false);
    }

    const addListingToFavourites = (e) => {
        e.preventDefault();
        listingService.addToFavourites(listingId)
            .then(result => {
                if (result.error) {
                    // return setError(result.error);
                }
                setListing(result);
            })
    }

    return (
        <>
            <section className="details-section">
                <div className="container">
                    <div className="row details">
                        <div className="col-7">
                            <div className="details-image">
                                <img src={listing.imageUrl} alt="" />
                                <p className="category">{listing.category}</p>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="post-details">
                                <h1>{listing.title}</h1>
                                <p className="author">{`${listing.author?.firstName} ${listing.author?.lastName}`}</p>
                                <p className="description">{listing.description}</p>
                                <p className="prise"><span>{listing.prise}</span> BGN</p>
                                <p className="shipping">{listing.shipping}</p>
                            </div>
                            <div className="details-buttons">
                                
                                {
                                    user._id === listing.author?._id
                                        ?
                                            <>
                                                <Link className="link" to={`/listing/${listing._id}/edit`}>Edit</Link>
                                                <Link className="link" to={`/listing/${listing._id}/delete`} onClick={showDialog}>Delete</Link>
                                            </>
                                        : <button className={listing?.saved && listing?.saved.includes(user._id) ? 'disabled' : 'link'} onClick={addListingToFavourites}>&#10084;</button>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Comments listingId={listingId} />

            <ListingDelete show={deleteDialog} changeState={hideDialog} listingId={listing._id} category={listing.category} />
        </>
    );
}

export default ListingDetails;