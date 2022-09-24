import express from "express";
import {
	createPost,
	deletePost,
	getPosts,
	updatePost,
	getPostById,
} from "../controllers/PostController.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/create/post", createPost);
router.patch("/edit/:uuid", updatePost);
router.delete("/post/:uuid", deletePost);
router.get("/post/:uuid", getPostById);

export default router;
