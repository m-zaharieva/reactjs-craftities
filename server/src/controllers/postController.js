import { Router } from "express";

import * as listingService from './../services/listingService.js';
import { authMiddleware } from './../middlewares/authMiddleware.js';
import * as userService from './../services/userService.js';

const router = Router();


router.get('/topItems', (req, res) => {
    listingService.topFourItems()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            // TODO Error Handler
            console.log('Post Controller Catalog ' + error.message);
        });
});

router.get('/my-listings', (req, res) => {
    let token = req.headers['user-authorization'];
    userService.varifyToken(token)
        .then(user => {
            return listingService.userListings(user._id)
        })
        .then(listings => {
            res.json(listings);
        })
});
 
router.get('/:category', (req, res) => {
    let category = req.params.category;
    listingService.postsForCategory(category)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err.message);
            //TODO Error handler
        })
})

router.get('/:listingId/details', (req, res) => {
    let listingId = req.params.listingId;
    listingService.postDetails(listingId)
        .then(post => {
            return res.json(post)
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Details: ' + error.message);
        })
});

router.post('/create', authMiddleware, (req, res) => {
    let postData = req.body;
    console.log(postData);

    // let data = req.body;
    listingService.create(postData)
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

    listingService.postUpdate(postId, data)
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

    listingService.postDelete(postId)
        .then(() => {
            res.json({status: 200, message: 'Post was deleted successfully' })
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Delete: ' + error.message);
        })
});





export default router;