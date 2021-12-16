import { useState, useEffect } from 'react';

import './MyListings.css';
import * as listingService from './../../../services/listingService.js';
import ListingCard from '../../ListingCard/ListingCard';


function MyListings() {
    let [listings, setListings] = useState([]);
    useEffect(() => {
        listingService.userListings()
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