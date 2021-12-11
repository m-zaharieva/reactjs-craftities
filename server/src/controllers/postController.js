import { Router } from "express";

import * as postService from './../services/postService.js';
import { authMiddleware } from './../middlewares/authMiddleware.js';

const router = Router();


// router.get('/catalog', (req, res) => {
//     postService.allPosts()
//         .then(posts => {
//             res.json(posts);
//         })
//         .catch(error => {
//             // TODO Error Handler
//             console.log('Post Controller Catalog ' + error.message);
//         });
// });

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


router.get('/:category', (req, res) => {
    let category = req.params.category;
    postService.postsForCategory(category)
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
    postService.postDetails(listingId)
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
            res.json(updatedPost)
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
            res.json({ message: 'Post was deleted successfully' })
        })
        .catch(error => {
            //TODO Error handler
            console.log('Post Controller Delete: ' + error.message);
        })
});


export default router;