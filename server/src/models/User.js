import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    myListings: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Listing',
        }
    ],
    favourites: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Listing',
        }
    ],
});

const User = mongoose.model('User', userSchema);

export default User;