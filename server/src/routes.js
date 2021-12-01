import { Router } from "express";

import userController from './controllers/userController.js';
import postController from './controllers/postController.js';
import homeController from './controllers/homeController.js';



const router = Router();

router.use('/api', homeController);
router.use('/api/users', userController);
router.use('/api/post', postController);


router.use('/api/*', (req, res) => {
    res.status(404)
            .send(`Endpoint ${req.method.toUpperCase()} ${req.baseUrl}${req.path.slice(0, -1)} NOT FOUND!`);
})

router.use('*', (req, res) => {
    res.sendFile('./../public/index.html');
})


export default router;

