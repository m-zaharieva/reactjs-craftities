import { useEffect, useState } from 'react';

import './Category.css';
import * as listingService from '../../services/listingService.js';
import ListingCard from './../Listing/ListingCard/ListingCard.js';

function Categorie({ match }) {
    let [listing, setListing] = useState([]);
    let category = match.params.category;
    
    const categoriesLib = {
        'jewellery-and-accessories': 'Jewellery & Accessories',
        'clothes-and-shoes': 'Clothes & Shoes',
        'home-and-living': 'Home & Living',
        'wedding-and-party': 'Wedding & Party',
        'toys-and-entertainment': 'Toys & Entertainment',
        'art-and-collectibles': 'Art & Collectibles'
    }
    
    console.log(categoriesLib[category]);
    useEffect(() => {
        listingService.category(category)
            .then(result => {
                setListing(result);
            })
    }, []);


    return (
        <section className='category-section'>
            <div className='container'>
                <h1>{categoriesLib[category]}</h1>
                    <div className="row">
                            {listing.map(x =>
                                <ListingCard key={x._id} props={x} />
                            )}
                    </div>
            </div>
        </section>
    );
}

export default Categorie;