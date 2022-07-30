import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// get, post,update,patch
router.get("/", getPosts);

export default router;
