import { useState, useEffect } from 'react';

import './TopItems.css';
import { topItems } from './../../../services/postService.js'
import PostCard from './PostCard/PostCard.js';

function TopItems() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        topItems()
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

                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="img/Western-Seas-Bracelet-Custom-Jewelry-2.jpg" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Project Name Here</h3>
                                <p>John Doe</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">35.00</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="img/images.jpg" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Project Name Here</h3>
                                <p>John Doe</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">35.00</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="img/fposter,small,wall_texture,product,750x1000.u1.jpg" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Project Name Here</h3>
                                <p>John Doe</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">35.00</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="img/433b3a1e0d93d40d4e5c96e9f7b61001.jpg" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Project Name Here</h3>
                                <p>John Doe</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">35.00</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopItems;

