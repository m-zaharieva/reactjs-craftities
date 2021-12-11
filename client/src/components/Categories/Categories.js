import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Categories.css';
import * as listingService from '../../services/listingService.js';

function Categories() {
    let [posts, setPosts] = useState([]);


    useEffect(() => {
        listingService.allPosts()
            .then(posts => {
                setPosts(posts);
            })
    }, []);


    return (
        <section className="categories-section">
            <div className="container">
                <h1>Categories</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/jewellery-and-accessories">
                                <h2>Jewellery &amp; Accessories</h2>
                            </Link>
                            {/* <div className="row">
                            {posts.map(x =>
                                <CatalogueCard key={x._id} props={x} />
                            )}
                        </div> */}
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/clothes-and-shues" >
                                <h2>Clothes &amp; Shues</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/home-and-living" >
                                <h2>Home &amp; Living</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/wedding-and-party" >
                                <h2>Wedding &amp; Party</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/toys-and-entertainment" >
                                <h2>Toys &amp; Entertainment</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="categorie-wrapper">
                            <Link to="/c/art-and-collectibles" >
                                <h2>Art &amp; Collectibles </h2>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Categories;