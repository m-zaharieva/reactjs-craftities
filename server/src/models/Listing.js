import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
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
        default: 0,
    },
    // shipping: {
    //     type: String,
    //     default: 'FREE shipping',
    // },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    saved: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    savedLength: {
        type: Number,
        default: 0,
    },
},
{
  timestamps: true
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;