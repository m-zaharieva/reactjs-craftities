import { Link } from 'react-router-dom';
import './HomeCategories.css';

function HomeCategories() {
    return (
        <section className="home-categories-section">
            <div className="container">
                <h2>Categories you may like</h2>
                <div className="row">
                    <div className="col-2">
                        <Link to="/c/jewellery-and-accessories" className="category-card">
                            <img src="img/jewellery.svg" alt="" />
                            <h4>Jewellery &amp; Accessories</h4>
                        </Link>
                    </div>
                    <div className="col-2 category-card">
                        <Link to="/c/jewellery-and-accessories" className="category-card">
                            <img src="img/party.svg" alt="" />
                            <h4>Wedding &amp; Party</h4>
                        </Link>
                    </div>
                    <div className="col-2 category-card">
                        <Link to="/c/jewellery-and-accessories" className="category-card">
                            <img src="img/home.svg" alt="" />
                            <h4>Home &amp; Living</h4>
                        </Link>
                    </div>
                    <div className="col-2 category-card">
                        <Link to="/c/jewellery-and-accessories" className="category-card">
                            <img src="img/toys.svg" alt="" />
                            <h4>Toys &amp; Entertainment</h4>
                        </Link>
                    </div>
                    <div className="col-2 category-card">
                        <Link to="/c/jewellery-and-accessories" className="category-card">
                            <img src="img/clothes.svg" alt="" />
                            <h4>Clothes &amp; Shoes</h4>
                        </Link>
                    </div>
                </div>
                <div className="more-button">
                    <Link to="/c">More categories</Link>
                </div>
            </div>
        </section>
    );
}

export default HomeCategories;