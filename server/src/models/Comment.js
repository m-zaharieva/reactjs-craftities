import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Types.ObjectId,
        ref: 'Listing',
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;