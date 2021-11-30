// import './CatalogueCard.css';

function CatalogueCard({props}) {
    return (
        <div className="col-3 card-white">
            <article>
                <div className="card-image-holder">
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="card-details-holder">

                    <h3>{props.title}</h3>
                    <p>{props.author}</p>
                    <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                    <div className="row card-prise-info-holder">
                        <p className="col-7"><span className="card-prise">{props.prise}</span> BGN</p>
                        {/* Optional */}
                        <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                    </div>
                </div>
            </article>
        </div>
    )
}


export default CatalogueCard;