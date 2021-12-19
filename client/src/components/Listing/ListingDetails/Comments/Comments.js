import { useEffect, useState } from "react";

import CommentForm from "./ComentForm";
import Comment from "./Comment.js";
import * as listingService from './../../../../services/listingService.js';

function Comments({
    listingId
}) {
    let [comments, setComments] = useState([]);
    let [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        listingService.listingComments(listingId)
            .then(result => {
                setComments(result)
            })
    }, [listingId]);

    const showCommentForm = (e) => {
        setShowForm(!showForm)
        console.log(showForm);
    }

    const renderNewComments = (comment) => {
        let newComments = [...comments, comment];
        return setComments(newComments);
    }

    return (
        <section className='comments-section'>
            <div className='container'>
                <h2 className="">Commets</h2>
                <div className="row">

                    <div className='col-8 margin-auto'>

                        {showForm
                            ? <CommentForm listingId={listingId}  renderNewComments={renderNewComments} />
                            : <a className="comments-link" to={`/listing/${listingId}/add-to-favoutites`} onClick={showCommentForm}>Comment</a>
                        }

                    </div>
                    {
                        comments.length > 0
                            ? comments.map(comment => comment = <Comment key={comment._id} comment={comment} />)
                            : <div className='comment-holder col-12'>
                                <p>There are no comments yet. Be the first to leave your's here....</p>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
}

export default Comments;