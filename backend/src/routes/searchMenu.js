import express from "express";
import { searchMenu } from "../controllers/searchMenuController.js";

const router = express.Router();

router.get('/search',searchMenu);

export default router;
