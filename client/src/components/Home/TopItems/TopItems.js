import { useState, useEffect } from 'react';

import './TopItems.css';
import * as postService from './../../../services/postService.js'
import PostCard from './PostCard/PostCard.js';

function TopItems() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.topItems()
            .then(res => res.json())
            .then(result => {
                setPosts(result);
            });
    }, []);

    return (
        <section className="top-items-section">
            <div className="container">
                <h2>Top Items Right Now</h2>
                <div className="row">
                    
                    {posts.map(x => <PostCard key={x._id} item={x} />)}

                </div>
            </div>
        </section>
    );
}

export default TopItems;
