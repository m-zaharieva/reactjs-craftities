import { Router } from "express";

import * as dataService from '../services/dataService.js';
import * as authService from '../services/authService.js';
import * as userService from '../services/userService.js';
import * as commentService from '../services/commentsService.js';

const router = Router();


router.post('/create', (req, res) => {
    let postData = req.body;
    let token = req.headers['user-authorization'];
    
    authService.varifyToken(token)
        .then(user => {
             return  dataService.create(postData, user._id)
        })
        .then(newPost => {
            res.json(newPost);
        })
        .catch(error => {
            // TODO Error handler
            console.log('Post Controller Create ' + error.message);
        });
});

router.get('/all', (req, res) => {
    return dataService.allPosts()
        .then(listings => {
            res.json(listings);
        })
        .catch(err => {
            console.log(error.message);
            res.status(404).json({error: 'Resource not found'});
        })
})

router.get('/:listingId/details', (req, res) => {
    let listingId = req.params.listingId;
    dataService.postDetails(listingId)
        .then(post => {
            return res.json(post)
        })
        .catch(error => {
            console.log(error.message);
            res.status(404).json({error: 'Resource not found'});
        })
});


router.put('/:postId/edit', (req, res) => {
    let token = req.headers['user-authorization'];
    let postId = req.params.postId;
    let data = req.body;

    authService.varifyToken(token)
        .then(user => {
             return dataService.postUpdate(postId, data)
        })
        .then(updatedPost => {
            res.json(updatedPost)
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Update: ' + error.message);
        })
});

router.delete('/:postId/delete', (req, res) => {
    let postId = req.params.postId;
    let token = req.headers['user-authorization'];

    authService.varifyToken(token)
        .then(user => {
            return dataService.postDelete(postId)
        })
        .then(() => {
            res.json({status: 200, message: 'Post was deleted successfully' })
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Delete: ' + error.message);
        })
});


router.get('/:postId/add-to-favoutites', (req, res) => {
    let postId = req.params.postId;
    let token = req.headers['user-authorization'];
    
    
    authService.varifyToken(token)
    .then(user => {
        return userService.addToFavourites(user._id, postId)
    })
    .then(user => {
        return dataService.savedByUser(user._id, postId)
    })
    .then(listings => {
        res.json(listings);
    })
    .catch(err => {
        res.status(403).json({error: err.message});
    });
})

router.post('/:postId/comments', (req, res) => {
    let postId = req.params.postId;
    let token = req.headers['user-authorization'];
    let comment = req.body;
    
    authService.varifyToken(token)
    .then(user => {
        return commentService.addNewComment(user._id, postId, comment)
    })
    .then(comment => {
        res.status(200).json(comment);
    })
});

router.get('/:postId/comments', (req, res) => {
    let postId = req.params.postId;
    commentService.getAllComments(postId)
        .then(comments => {
            res.json(comments)
        })
    
})




export default router;