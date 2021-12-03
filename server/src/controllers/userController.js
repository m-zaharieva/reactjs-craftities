import { Router } from "express";

import * as userService from "../services/userService.js";

const router = Router();


router.post('/register', (req, res) => {
    let data = req.body;


    userService.register(data)
        .then(user => {
            // return userService.createToken(user)
            return Promise.all([userService.createToken(user), user]) 
        })
        .then(([token, user]) => {
            let result = {
                token: token,
                userId: user._id,
            }
            res.json(result); 
        })
        .catch(error => {
            // TODO error handler
            console.log('User Controller Register: ' + error.message);
        });
});


router.post('/login', (req, res) => {
    let data = req.body;

    userService.login(data)
        .then(user => {
            return Promise.all([userService.createToken(user), user])
        })
        .then(([token, user]) => {
            let result = {
                token: token,
                userId: user._id,
            }
            res.json(result); 
        })
        .catch(error => {
            // TODO error handler
            console.log('User Controller Register: ' + error.message);
        });
});

router.get('/logout'), (req, res) => {
    // TODO
    console.log(req.headers);
}

router.get('/:userId', (req, res) => {
    let userId = req.params.userId;
    userService.findUserById(userId)
        .then(user => {
            console.log(user);
            res.json(user);
        });
})

export default router;