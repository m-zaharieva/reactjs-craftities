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
    myListings: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Listing',
        }
    ],
    favorites: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Listing',
        }
    ],
});

const User = mongoose.model('User', userSchema);

export default User;