import express from 'express';
import {getUserForSidebar} from '../controllers/userController.js'
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

router.get('/', protectRoute,getUserForSidebar);

export default router;