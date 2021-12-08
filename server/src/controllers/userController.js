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

router.get('/logout', (req, res) => {
    let token = req.headers['user-authorization'];
    userService.logout(token)
        .then(decodedToken => {
            res.json({"message": "You have been successfully loged out."})
            //TODO Ckeck if the token is outdated and return proper response
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/:userId', (req, res) => {
    let token = req.headers['user-authorization'];
    let userId = req.params.userId;

    userService.varifyToken(token)
        .then(decodedToken => {
            return userService.findUserById(userId)
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({error: "Your session has expired. Please, login to your profile."})
        });

})

export default router;