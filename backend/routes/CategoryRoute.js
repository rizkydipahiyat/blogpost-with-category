import express from "express";
import {
	createCategory,
	getCategories,
	getCategoryById,
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/category", getCategories);
router.get("/category/:id", getCategoryById);
router.post("/create/category", createCategory);

export default router;
