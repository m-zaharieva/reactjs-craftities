import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './MyListings.css';
import * as userService from './../../../services/userService.js';
import ListingCard from './../../Listing/ListingCard/ListingCard.js';


function MyListings() {
    let [listings, setListings] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    
                    {
                    listings[0] 
                    ? listings.map(x => <ListingCard key={x._id} props={x} />)
                    : <div className='no-uploads'>
                        <h2>Oh, you have no uploaded listings.</h2>
                        <p>Wold you like to give it a try? </p>
                        <Link to='/user/profile/add-new-listing'>Upload your first project</Link>
                      </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default MyListings;