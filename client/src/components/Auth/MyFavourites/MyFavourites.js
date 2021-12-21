import { useState, useEffect } from 'react';

import * as userService from './../../../services/userService.js';
import ListingCard from './../../Listing/ListingCard/ListingCard.js';

function MyFavourites() {
    let [user, setUser] = useState({});

    useEffect(() => {
        userService.userFavourites()
            .then(user => {
                setUser(user);
            })
    }, []);

    return (
        <section className="favourites-section">
            <div className="container">
                <div className="row">

                    {
                        user.favourites
                            ? user.favourites.map(x => <ListingCard key={x._id} props={x} />)
                            : <></>
                    }

                </div>
            </div>
        </section>
    );
}

export default MyFavourites;