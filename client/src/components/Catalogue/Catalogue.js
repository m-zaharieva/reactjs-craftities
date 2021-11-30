import { useState, useEffect } from 'react'

import './Catalogue.css';
import * as postService from './../../services/postService.js';
import CatalogueCard from './CatalogueCard/CatalogueCard.js';

function Catalogue() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.allPosts()
            .then(posts => {
                setPosts(posts);
            })
    }, []);


    return (
        <section className="catalogue-section">
            <div className="container">
                <h1>Catalogue</h1>
                <h2>Jewellery and Accessories</h2>
                <div className="row">

                    {posts.map(x =>
                        <CatalogueCard key={x._id} props={x} />
                    )}

                </div>
                <h2>Clothes and Shoes</h2>
            </div>
        </section>
    );
}

export default Catalogue;