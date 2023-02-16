import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {createWork, getWork, getWorks, updateWork, deleteWork} from '../controllers/worksController.js';
//userWorks
router.route('/').get(authenticateUser, getWorks).post(authenticateUser, createWork);
// router.route('/userWorks').get(authenticateUser, userWorks)
router.route('/:id').get(getWork).patch(authenticateUser, updateWork).delete(authenticateUser, deleteWork);

export default router;

