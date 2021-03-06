import Listing from '../models/Listing.js';
import Comment from '../models/Comment.js';


export const allPosts = () => {
    return Listing.find({}).populate('author', '_id firstName lastName email').lean();
}

export const postsForCategory = (category) => {
    return Listing.find({category}).populate('author', '_id firstName lastName');
}

export const topFour = () => {
    return Listing.find({}, {}, {sort: {'savedLength': -1}}).populate('author', '_id firstName lastName').limit(4).lean();
    // TODO the filtering of  the top four items
}

export const create = (data, userId) => {
    return Listing.create({...data, author: userId});
}

export const postUpdate = (id, data) => {
    return Listing.findByIdAndUpdate(id, data, {returnDocument: 'after'});
}

export const postDetails = (id) => {
    return Listing.findById(id).populate('author', '_id firstName lastName email').lean();
}


export const postDelete = (id) => {
    return Listing.findByIdAndDelete(id);
}


export const userListings = (userId) => {
    return Listing.find({author: userId}).lean();
}

export const savedByUser = (userId, postId) => {
    return Listing.findByIdAndUpdate(postId, 
        {
            "$push": {"saved": userId},
            "$inc": {"savedLength": 1}
        }, 
        {returnDocument: 'after'}
    ).populate('author', '_id firstName lastName email')
        .then(listing => {
            return listing.save();
        })
}

export const addComment = (userId, postId, message) => {
    return Comment.create({author: userId, message: message.comment})
        .then(comment => {
            return Promise.all([comment.save(), Listing.findById(postId)])
        })
        .then(([comment, listing]) => {
            listing.comments.push(comment._id);
            return listing.save();
        });
}