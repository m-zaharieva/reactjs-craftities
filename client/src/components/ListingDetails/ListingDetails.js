import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './ListingDetails.css';
import * as listingService from '../../services/listingService.js';

function ListingDetails({ match }) {
    let [listing, setListing] = useState({});

    let listingId = match.params.listingId;
    
    useEffect(() => {
        listingService.getOnePopulated(listingId)
        .then(data => {                
                setListing(data);
            })
    }, [listingId]);


    return (
        <section className="details-section">
            <div className="container">
                <div className="row details">
                    <div className="col-7">
                        <div className="details-image">
                            <img src={listing.imageUrl} alt="" />
                            <p className="categorie">{listing.category}</p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="post-details">
                            <p className="author">{`${listing.author?.firstName} ${listing.author?.lastName}`}</p>
                            <h1>{listing.title}</h1>
                            <p className="description">{listing.description}</p>
                            <p className="prise">{listing.prise} $</p>
                            <p className="shipping">{listing.shipping}</p>
                        </div>
                        <div className="details-buttons">
                            <Link className="link" to={`/listing/${listing._id}/edit`}>Edit</Link>
                            <Link className="link" to={`/listing/${listing._id}/delete`}>Delete</Link>
                            <Link className="link" to={`/listing/${listing._id}/like`}>Like</Link>
                            <p>Likes: 44</p>
                        </div>
                    </div>
                </div>
                <div className="row comments">
                    <div className="col-7">
                        <h2 className="">Commets</h2>
                        <div className="row comment-holder">
                            <div className="col-2">
                                <div className="avatar">
                                    <img src="images/avatar.png" alt="" />
                                </div>
                            </div>
                            <div className="col-10">
                                <h3 className="author">John Doe</h3>
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="row comment-holder">
                            <div className="col-2">
                                <div className="avatar">
                                    <img src="images/avatar.png" alt="" />
                                </div>
                            </div>
                            <div className="col-10">
                                <h3 className="author">John Doe</h3>
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum um dolor sit amet lorem ipsum do lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingDetails;