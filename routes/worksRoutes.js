import express from 'express';
const router = express.Router();

import {createWork, getWork, getAllWorks, updateWork, deleteWork} from '../controllers/worksController.js';

router.route('/').get(getAllWorks).post(createWork);
router.route('/id').get(getWork).patch(updateWork).delete(deleteWork);

export default router;

