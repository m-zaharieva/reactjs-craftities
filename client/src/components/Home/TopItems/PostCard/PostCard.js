import './PostCard.css';

function PostCard(props) {
    console.log(props);
    return (
        <div className="col-3 card-white">
            <article>
                <div className="card-image-holder">
                    <img src={props.item.imageUrl} alt="" />
                </div>
                <div className="card-details-holder">

                    <h3>{props.item.title}</h3>
                    <p>{props.item.author}</p>
                    <p><span className="card-votes">4.6</span> / 5 with 1154 votes</p>

                    <div className="row card-prise-info-holder">
                        <p className="col-7"><span className="card-prise">{props.item.prise}</span> BGN</p>
                        {/* Optional */}
                        <p className="col-5"><span className="card-delivery-note">FREE delivery</span></p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default PostCard;