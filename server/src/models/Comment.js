import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;