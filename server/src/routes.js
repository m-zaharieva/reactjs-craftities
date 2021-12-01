import { Router } from "express";

import userController from './controllers/userController.js';
import postController from './controllers/postController.js';
import homeController from './controllers/homeController.js';



const router = Router();

router.use('/api', homeController);
router.use('/api/users', userController);
router.use('/api/post', postController);




export default router;

