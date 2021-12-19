import User from "../models/User.js";

// Use it for login and register
export const findUserByEmail = (email) => {
    return User.findOne({email});
}

// Any other request for user data
export const findUserById = (id) => {
    return User.findById(id).select('-password').populate('favourites');
}

export const addToFavourites = (userId, postId) => {
    return User.findById(userId)
        .then(user => {
            if (user.favourites.includes(postId)) {
                throw new Error ('You have already add this item to your favourites list');
            }
            user.favourites.push(postId);
            return user.save();
        });
}

