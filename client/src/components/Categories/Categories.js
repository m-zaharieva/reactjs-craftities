import { Link } from 'react-router-dom';

import './Categories.css';

function Categories() {
    return (
        <section className="categories-section">
            <div className="container">
                <h1>Categories</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/jewellery-and-accessories">
                                <h2>Jewellery &amp; Accessories</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/clothes-and-shoes" >
                                <h2>Clothes &amp; Shues</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/home-and-living" >
                                <h2>Home &amp; Living</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/wedding-and-party" >
                                <h2>Wedding &amp; Party</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/toys-and-entertainment" >
                                <h2>Toys &amp; Entertainment</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="category-wrapper">
                            <Link to="/c/art-and-collectibles" >
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