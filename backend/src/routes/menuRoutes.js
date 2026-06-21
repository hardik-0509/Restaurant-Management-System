import express from 'express';  
import { addMenuItem ,getMenuItems,filterMenu } from '../controllers/menucontroller.js';

const router=express.Router();

router.post('/',addMenuItem);
router.get('/',getMenuItems);
router.get('/filter', filterMenu);

export default router;
