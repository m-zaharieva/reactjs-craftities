import './HomeCategories.css';

function HomeCategories() {
    return (
        <section className="home-categories-section">
            <div className="container">
                <h2>Categories you may like</h2>
                <div className="row">
                    <div className="col-2 category-card">
                        <img src="img/icon-section-1-2.svg" alt="" />
                        <h4>Jewellery &amp; Accessories</h4>
                    </div>
                    <div className="col-2 category-card">
                        <img src="img/icon-section-1-2.svg" alt="" />
                        <h4>Wedding &amp; Party</h4>
                    </div>
                    <div className="col-2 category-card">
                        <img src="img/icon-section-1-2.svg" alt="" />
                        <h4>Home &amp; Living</h4>
                    </div>
                    <div className="col-2 category-card">
                        <img src="img/icon-section-1-2.svg" alt="" />
                        <h4>Toys &amp; Entertainment</h4>
                    </div>
                    <div className="col-2 category-card">
                        <img src="img/icon-section-1-2.svg" alt="" />
                        <h4>Clothes &amp; Shoes</h4>
                    </div>
                </div>
                <div className="more-button">
                    <a href="/categories">More categories</a>
                </div>
            </div>
        </section>
    );
}

export default HomeCategories;