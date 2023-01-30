import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {createWork, getWork, getAllWorks, updateWork, deleteWork} from '../controllers/worksController.js';

router.route('/').get(getAllWorks).post(authenticateUser, createWork);
router.route('/:id').get(getWork).patch(authenticateUser, updateWork).delete(authenticateUser, deleteWork);

export default router;

