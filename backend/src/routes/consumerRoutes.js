import express from 'express';
import { addConsumer ,getConsumers } from '../controllers/consumercontroller.js';

const router=express.Router();

router.post('/',addConsumer);
router.get('/',getConsumers);

export default router;

