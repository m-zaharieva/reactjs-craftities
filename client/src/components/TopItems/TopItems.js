import './TopItems.css';

function TopItems() {
    return (
        <section className="top-items-section">
            <div className="container">
                <h2>Top Items Right Now</h2>
                <div className="top-items">
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
                            <h3>Item</h3>
                        </div>
                        <div>
                            <p>description</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>Item</h3>
                        </div>
                        <div>
                            <p>description</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="img/1c069cbc813fd2a6eb83b8cafb471a8c.jpg" alt="Nackle" />
                        </div>
                        <div>
                            <h3>Item</h3>
                        </div>
                        <div>
                            <p>description</p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default TopItems;

