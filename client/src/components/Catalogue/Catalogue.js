import './Catalogue.css';

function Catalogue() {
    return (
        <section className="catalogue-section">
            <div className="container">
                <h1>Catalogue</h1>
                <h2>Jewellery and Accessories</h2>
                <div className="row">
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="imageurl" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Title</h3>
                                <p>author</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">prise</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="imageurl" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Title</h3>
                                <p>author</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">prise</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="imageurl" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Title</h3>
                                <p>author</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">prise</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-3 card-white">
                        <article>
                            <div className="card-image-holder">
                                <img src="imageurl" alt="" />
                            </div>
                            <div className="card-details-holder">

                                <h3>Title</h3>
                                <p>author</p>
                                <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                                <div className="row card-prise-info-holder">
                                    <p className="col-7"><span className="card-prise">prise</span> BGN</p>
                                    {/* Optional */}
                                    <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <h2>Clothes and Shoes</h2>
            </div>
        </section>
    );
}

export default Catalogue;