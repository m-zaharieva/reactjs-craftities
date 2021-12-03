import { Router } from "express";

import * as postService from './../services/postService.js';
import { authMiddleware } from './../middlewares/authMiddleware.js';

const router = Router();


router.get('/catalog', (req, res) => {
    postService.allPosts()
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            // TODO Error Handler
            console.log('Post Controller Catalog ' + error.message);
        });
});

router.get('/topItems', (req, res) => {
    postService.topFourItems()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            // TODO Error Handler
            console.log('Post Controller Catalog ' + error.message);
        });
});


router.post('/create', authMiddleware, (req, res) => {
    let postData = req.body;
    console.log(postData);

    // let data = req.body;
    postService.create(postData)
        .then(newPost => {
            res.json(newPost);
        })
        .catch(error => {
            // TODO Error handler
            console.log('Post Controller Create ' + error.message);
        });
});


router.put('/:postId/edit', (req, res) => {
    let postId = req.params.postId;
    let data = req.body;

    postService.postUpdate(postId, data)
        .then(updatedPost => {
            console.log(updatedPost);
            res.json(updatedPost)
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Update: ' + error.message);
        })
});

router.get('/:postId', (req, res) => {
    let postId = req.params.postId;

    postService.postDetails(postId)
        .then(post => {
            console.log(post);
            res.json(post)
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Details: ' + error.message);
        })
});

router.delete('/:postId/delete', (req, res) => {
    let postId = req.params.postId;

    postService.postDelete(postId)
        .then(() => {
            res.json({ message: 'Post was deleted successfully' })
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Delete: ' + error.message);
        })
});


export default router;