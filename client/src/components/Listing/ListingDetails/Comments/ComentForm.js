import * as listingService from '../../../../services/listingService.js';

function CommentForm({
    listingId,
    renderNewComments
}) {

    const addNewComment = (e) => {
        e.preventDefault();
        let comment = Object.fromEntries(new FormData(e.currentTarget));
        e.currentTarget.reset();
        
        listingService.addNewComment(listingId, comment)
        .then(result => {
            renderNewComments(result)
        });
    }

    return (
        <form className="comments-form" onSubmit={addNewComment}>
            <div>
                {/* <label htmlFor="comment">Comment:</label> */}
                <textarea type="text" id="comment" name="comment" placeholder="Comment here" cols={30} rows={5}></textarea>
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default CommentForm;