import Listing from '../models/Listing.js';


export const allPosts = () => {
    return Listing.find({});
}

export const postsForCategory = (category) => {
    return Listing.find({category}).populate('author', '_id firstName lastName');
}

export const topFourItems = () => {
    return Listing.find({}, {}, {sort: {'createdAt': -1}}).populate('author', '_id firstName lastName').limit(4).lean();
    // TODO the filtering of  the top four items
}

export const create = (data) => {
    return Listing.create({...data});
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