import { useState, useEffect } from 'react';

import './MyListings.css';
import * as userService from './../../../services/userService.js';
import ListingCard from './../../Listing/ListingCard/ListingCard.js';


function MyListings() {
    let [listings, setListings] = useState([]);
    useEffect(() => {
        userService.userListings()
        .then(result => {
                setListings(result)
            })
    }, []);

    return (
        <section className='my-listings-section'>
            <div className='container'>
                <h1>My listings</h1>
                <div className='row'>
                    {listings.map(x =>
                        <ListingCard key={x._id} props={x} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default MyListings;