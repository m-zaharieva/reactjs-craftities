import Post from './../models/Post.js';


export const allPosts = () => {
    return Post.find({});
}

export const create = (data) => {
    return Post.create({...data});
}

export const postUpdate = (id, data) => {
    return Post.findByIdAndUpdate(id, data, {returnDocument: 'after'});
}

export const postDetails = (id) => {
    return Post.findById(id);
}

export const postDelete = (id) => {
    return Post.findByIdAndDelete(id);
}


