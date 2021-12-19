import { Router } from "express";

import categoryController from './collectionController.js';
import listingsController from './listingsController.js';

const router = Router();




router.use('/collection', categoryController);
router.use('/listing', listingsController)





export default router;