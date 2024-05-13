import express from "express";
import { getNews } from "../controllers/data.controller.js" 

const router = express.Router();

router.get('/api', getNews);

export {router};
