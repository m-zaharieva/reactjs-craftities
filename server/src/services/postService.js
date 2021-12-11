import Post from './../models/Post.js';


export const allPosts = () => {
    return Post.find({});
}

export const postsForCategory = (category) => {
    return Post.find({category}).populate('author', '_id firstName lastName');
}

export const topFourItems = () => {
    return Post.find({}).populate('author', '_id firstName lastName').limit(4).lean();
    // TODO the filtering of  the top four items
}

export const create = (data) => {
    return Post.create({...data});
}

export const postUpdate = (id, data) => {
    return Post.findByIdAndUpdate(id, data, {returnDocument: 'after'});
}

export const postDetails = (id) => {
    return Post.findById(id).populate('author', '_id firstName lastName email').lean();
}

export const postDelete = (id) => {
    return Post.findByIdAndDelete(id);
}


