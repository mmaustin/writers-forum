import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {createWork, getWork, getUserWorks, updateWork, deleteWork} from '../controllers/worksController.js';

router.route('/').get(authenticateUser, getUserWorks).post(authenticateUser, createWork);
router.route('/:id').get(getWork).patch(authenticateUser, updateWork).delete(authenticateUser, deleteWork);

export default router;

