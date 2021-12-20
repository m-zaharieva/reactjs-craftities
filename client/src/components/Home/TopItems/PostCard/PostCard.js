import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard(props) {
    // console.log(props);
    return (
        <div className="col-6 col-lg-3 card-white">
            <article>
                <div className="card-image-holder">
                    <Link to={`/listing/${props.item._id}`}><img src={props.item.imageUrl} alt="" /></Link>
                    <p className='prise'><span>{props.item.prise}</span> BGN</p>
                </div>
                    <Link to="/user/profile" className='author'><p>by <span>{`${props.item.author.firstName} ${props.item.author.lastName}`}</span></p></Link>
            </article>
        </div>
    );
}

export default PostCard;