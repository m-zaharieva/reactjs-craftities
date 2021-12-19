import Comment from './../models/Comment.js';

export const getAllComments = (postId) => {
    return Comment.find({itemId: postId}).populate('author', 'firstName lastName imageUrl _id');
}

export const addNewComment = (userId, postId, comment) => {
    return Comment.create({itemId: postId, author: userId, message: comment.comment, date: new Date() })
    .then(result => {
        return result.save();
    });
}