import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    prise: {
        type: Number,
        required: true,
        default: 'free',
    },
    shipping: {
        type: String,
        required: true,
        default: 'FREE shipping',
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Comment',
        }
    ],
});

const Post = mongoose.model('Post', postSchema);

export default Post;