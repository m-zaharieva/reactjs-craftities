import { useEffect, useState } from 'react';

import * as listingService from './../../../services/listingService.js';

import ListingCard from "../ListingCard/ListingCard";

function AllListings() {
    let [listings, setListings] = useState([]);

    useEffect(() => {
        listingService.getAllListings()
            .then(listings => {
                setListings(listings);
            })
    }, [])

    return (
        <section className="all-listings-section">
            <div className="container">
                <div className="row">
                    {listings.map(l => <ListingCard key={l._id} props={l} />)}
                </div>
            </div>
        </section>
    );
}

export default AllListings;