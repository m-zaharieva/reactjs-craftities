import {Link} from 'react-router-dom';

import './ListingCard.css';
import { ReactComponent as RatingStar } from './star.svg'

function ListingCard({ props }) {
    return (
        <div className="col-6 col-lg-3 listing-card">
            <article>
                <div className="listing-image">
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="listing-data">

                    <Link to={`/listing/${props._id}`}><h2>{props.title}</h2></Link>
                    
                    <Link to="/user/profile"><p className='listing-author'>{`${props.author.firstName} ${props.author.lastName}`}</p></Link>
                    <RatingStar className="star" /><span className="card-votes">(120)</span>
                    {/* <p className='listing-rating'><span className="card-votes">4.6</span> / 5 with 1154 votes</p> */}

                    <p className="listing-prise">{props.prise} BGN</p>
                   
                </div>
            </article>
        </div>
    )
}


export default ListingCard;