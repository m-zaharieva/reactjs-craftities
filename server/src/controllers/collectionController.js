import { Router } from "express";

import * as dataService from '../services/dataService.js';
import * as authService from '../services/authService.js';
import * as userService from '../services/userService.js';


const router = Router();


router.get('/top', (req, res) => {
    dataService.topFour()
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
    authService.varifyToken(token)
    .then(user => {
        return dataService.userListings(user._id)
    })
    .then(listings => {
        res.json(listings);
    })
});

router.get('/favourites', (req, res) => {
    let token = req.headers['user-authorization'];

    authService.varifyToken(token)
    .then(user => {
        return userService.findUserById(user._id)
    })
    .then(user => {
        res.json(user);
    });
});
 

router.get('/:category', (req, res) => {
    let category = req.params.category;
    dataService.postsForCategory(category)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err.message);
            //TODO Error handler
        })
})


export default router;