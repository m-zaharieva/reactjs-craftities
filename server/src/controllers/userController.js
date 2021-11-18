import { Router } from "express";

import * as userService from "../services/userService.js";

const router = Router();

router.post('/register', (req, res) => {
    let data = req.body;

    // ! Delete this log
    console.log('User Controller Register ' + data);

    userService.register(data)
        .then(user => {
            return userService.createToken(user)
        })
        .then(token => {
            res.json(token);
        })
        .catch(error => {
            // TODO error handler
            console.log('User Controller Register: ' + error.message);
        });
});

router.post('/login', (req, res) => {
    let data = req.body;

    console.log('User Controller Login ' + {...data});

    userService.login(data.email)
        .then(user => {
            return userService.createToken(user)
        })
        .then(token => {
            res.json(token);
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

router.get('/me', (req, res) => {
    // TODO 
})

export default router;