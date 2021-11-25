import Post from './../models/Post.js';


export const allPosts = () => {
    return Post.find({});
}

export const topFourItems = () => {
    return Post.find({}).limit(4);
    // TODO the filtering of  the top four items
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


