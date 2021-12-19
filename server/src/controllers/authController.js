import { Router } from "express";

import * as authService from "../services/authService.js";



const router = Router();


router.post('/register', (req, res) => {
    let userData = req.body;
    
    authService.register(userData)
        .then(user => {
            console.log(user);
            return Promise.all([authService.createToken(user), user]) 
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

    authService.login(data)
        .then(user => {
            return Promise.all([authService.createToken(user), user])
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

router.get('/logout', (req, res) => {
    let token = req.headers['user-authorization'];
    authService.logout(token)
        .then(decodedToken => {
            res.json({"message": "You have been successfully loged out."})
            //TODO Ckeck if the token is outdated and return proper response
        })
        .catch(err => {
            console.log(err);
        })
});




export default router;