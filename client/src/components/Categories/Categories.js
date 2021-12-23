import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Categories.css';

function Categories() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section className="categories-section">
            <div className="container">
                <h1>Categories</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/jewellery-and-accessories">
                                <img src="/img/jewellery.png" alt="" />
                                <h2>Jewellery &amp; Accessories</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/clothes-and-shoes" >
                                <img src="/img/clothes.png" alt="" />
                                <h2>Clothes &amp; Shues</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/home-and-living" >
                                <img src="/img/home.png" alt="" />
                                <h2>Home &amp; Living</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/wedding-and-party" >
                                <img src="/img/wedding.png" alt="" />
                                <h2>Wedding &amp; Party</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/toys-and-entertainment" >
                                <img src="/img/toys.png" alt="" />
                                <h2>Toys &amp; Entertainment</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="category-wrapper">
                            <Link to="/c/art-and-collectibles" >
                                <img src="/img/art.png" alt="" />
                                <h2>Art &amp; Collectibles </h2>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className='col-12 all-listings-button'>
                    <Link to="/listing/all">See all listed items</Link>
                </div>

            </div>
        </section>
    );
}

export default Categories;