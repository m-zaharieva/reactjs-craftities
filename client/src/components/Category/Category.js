import { useEffect, useState } from 'react';

import './Category.css';
import * as listingService from '../../services/listingService.js';
import ListingCard from './ListingCard/ListingCard.js';

function Categorie({ match }) {
    let [listing, setListing] = useState([]);
    let category = match.params.category;
    console.log(category);

    useEffect(() => {
        listingService.listingsForCategory(category)
            .then(result => {
                setListing(result);
            })
    }, []);


    return (
        <section className='category-section'>
            <div className='container'>
                <h1>Jewellery and Accessories</h1>
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