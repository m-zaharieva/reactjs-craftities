import { Router } from "express";

import userController from './controllers/userController.js';
import postController from './controllers/postController.js';



const router = Router();

router.use('/users', userController);
router.use('/post', postController);




export default router;

