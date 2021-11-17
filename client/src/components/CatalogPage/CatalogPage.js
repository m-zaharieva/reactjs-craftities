import { useState, useEffect } from 'react';

import { allPosts } from '../../services/postService.js';
import './CatalogPage.css';

function CatalogPage() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        allPosts()
            .then(res => res.json())
            .then(allPosts => {
                console.log(allPosts);
                setPosts(allPosts);
            })
    }, []);

    return (
        <section className="catalog-section">
            <div className="container">
                <h2>Catalogue</h2>
                <div className="row">
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>DIY Midnight Owl</h3>
                        </div>
                        <div>
                            <p>description</p>
                            <p>Rating</p>
                            <p>Prise</p>
                            <p>User</p>
                            <p>Details =&gt;</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>DIY Midnight Owl</h3>
                        </div>
                        <div>
                            <p>description</p>
                            <p>Rating</p>
                            <p>Prise</p>
                            <p>User</p>
                            <p>Details =&gt;</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>DIY Midnight Owl</h3>
                        </div>
                        <div>
                            <p>description</p>
                            <p>Rating</p>
                            <p>Prise</p>
                            <p>User</p>
                            <p>Details =&gt;</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>DIY Midnight Owl</h3>
                        </div>
                        <div>
                            <p>description</p>
                            <p>Rating</p>
                            <p>Prise</p>
                            <p>User</p>
                            <p>Details =&gt;</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default CatalogPage;