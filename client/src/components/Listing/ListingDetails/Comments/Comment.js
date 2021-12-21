
function Comment({ comment }) {
    return (
        <div className="comment-holder col-12 col-lg-6">
            <div className='row'>
                <div className=" col-3 col-xl-2">
                    <div className="avatar">
                        <img src="images/avatar.png" alt="" />
                    </div>
                </div>
                <div className="col-9 col-xl-10">
                    <h3 className="author">{comment.author.firstName} {comment.author.lastName}</h3>
                    <p className='date'>{comment.date}</p>
                    <p>{comment.message}</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;