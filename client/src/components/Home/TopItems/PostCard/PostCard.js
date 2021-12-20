import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard(props) {
    // console.log(props);
    return (
        <div className="col-6 col-lg-3 card-white">
            <article>
                <div className="card-image-holder">
                    <img src={props.item.imageUrl} alt="" />
                </div>
                <div className="card-details-holder">
                    <Link to={`/listing/${props.item._id}`}><h3>{props.item.title}</h3></Link>
                    <Link to="/user/profile"><p>by <span>{`${props.item.author.firstName} ${props.item.author.lastName}`}</span></p></Link>
                </div>
            </article>
        </div>
    );
}

export default PostCard;