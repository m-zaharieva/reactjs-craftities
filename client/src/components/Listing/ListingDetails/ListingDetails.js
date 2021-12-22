import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './ListingDetails.css';
import * as listingService from './../../../services/listingService.js';
import { useAuthContext } from '../../../contexts/AuthContext';

import ListingDelete from '../ListingDelete/ListingDelete.js';
import Comments from './Comments/Comments.js';



function ListingDetails({ match, history }) {
    const { user } = useAuthContext();
    let [listing, setListing] = useState({});
    let [deleteDialog, setDeleteDialog] = useState(false);
    // let [error, setError] = useState('');

    let listingId = match.params.listingId;

    useEffect(() => {
        listingService.getOnePopulated(listingId)
            .then(data => {
                if (data.error) {
                    throw data;
                }
                setListing(data);
            })
            .catch(err => {
                console.log(err);
                history.push('/page-not-found')
            })
    }, [listingId, history]);

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
                        <div className="col-12 col-lg-7">
                            <div className="details-image">
                                <img src={listing.imageUrl} alt="" />
                                <p className="category">{listing.category}</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
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
                                        &&
                                            <>
                                                <Link className="link" to={`/listing/${listing._id}/edit`}>Edit</Link>
                                                <Link className="link" to={`/listing/${listing._id}/delete`} onClick={showDialog}>Delete</Link>
                                            </>
                                }

                                {
                                    user._id && user._id !== listing.author?._id  
                                    && 
                                        <button 
                                            className={listing?.saved && listing?.saved?.includes(user._id) ? 'disabled' : 'link'} 
                                            onClick={addListingToFavourites} 
                                            title="Add to yout favourites"
                                        >
                                            &#10084;
                                        </button>
                                }

                                {
                                    listing?.saved?.includes(user._id) 
                                        ? <p className='savedCounter'>Saved by: You {listing?.savedLength - 1 > 0 ? `and ${listing?.savedLength -1} more user(s)` : ''} </p>
                                        : <p className='savedCounter'>Saved by: {listing?.savedLength} {listing?.savedLength === 1 ? 'user' : 'users'}</p>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Comments listingId={listingId} authorId={listing.author?._id} />

            <ListingDelete show={deleteDialog} changeState={hideDialog} listingId={listing._id} category={listing.category} />
        </>
    );
}

export default ListingDetails;