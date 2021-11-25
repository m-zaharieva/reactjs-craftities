import { Router } from "express";

import * as postService from './../services/postService.js';

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


router.post('/create', (req, res) => {

    // ! Delete after client successful request from form
    let data = {
        title: 'Handmade bracelet',
        description: 'Lorem ipsum dolor sit ammet',
        imageUrl: 'https://image.shutterstock.com/image-photo/natural-mineral-stone-beads-yoga-260nw-1616070955.jpg',
        category: 'Jewelry',
        author: '6193d026978424a7c0d1f24b', 
    };


    // let data = req.body;
    postService.create(data)
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
            console.log('Post Controller Update: ' + error.message);
        })
});

router.delete('/:postId/delete', (req, res) => {
    let postId = req.params.postId;

    postService.postDelete(postId)
        .then(() => {
            res.json({message: 'Post was deleted successfully'})
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Update: ' + error.message);
        })
});


export default router;