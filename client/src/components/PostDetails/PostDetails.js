import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';


import './PostDetails.css';
import PostContext from './../../contexts/PostContext.js';
import * as PostService from './../../services/postService.js';

function PostDetails({ match }) {
    const { postContext } = useContext(PostContext);
    let [post, setPost] = useState({});

    let postId = match.params.postId;

    useEffect(() => {
        PostService.getOnePopulated(postId)
            .then(data => {
                postContext(data)
                setPost(data);
            })
    }, [postId, postContext])


    return (
        <section className="details-section">
            <div className="container">
                <div className="row details">
                    <div className="col-7">
                        <div className="details-image">
                            <img src={post.imageUrl} alt="" />
                            <p className="categorie">{post.category}</p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="post-details">
                            <p className="author">{`${post.author?.firstName} ${post.author?.lastName}`}</p>
                            <h1>{post.title}</h1>
                            <p className="description">{post.description}</p>
                            <p className="prise">{post.prise} $</p>
                            <p className="shipping">{post.shipping}</p>
                        </div>
                        <div className="details-buttons">
                            <Link to={`/post/${post._id}/edit`}>Edit</Link>
                            <Link to={`/post/${post._id}/delete`}>Delete</Link>
                            <Link to={`/post/${post._id}/like`}>Like</Link>
                            <p>Likes: 44</p>
                        </div>
                    </div>
                </div>
                <div className="row comments">
                    <div className="col-7">
                        <h2 className="">Commets</h2>
                        <div className="row comment-holder">
                            <div className="col-2">
                                <div className="avatar">
                                    <img src="images/avatar.png" alt="" />
                                </div>
                            </div>
                            <div className="col-10">
                                <h3 className="author">John Doe</h3>
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="row comment-holder">
                            <div className="col-2">
                                <div className="avatar">
                                    <img src="images/avatar.png" alt="" />
                                </div>
                            </div>
                            <div className="col-10">
                                <h3 className="author">John Doe</h3>
                                <p>Lorem ipsum dolor sit amet. Lorem ipsum um dolor sit amet lorem ipsum do lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostDetails;