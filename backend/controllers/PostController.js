import Category from "../models/CategoryModel.js";
import Post from "../models/PostModel.js";
import { Op } from "sequelize";

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.findAll({
			include: {
				model: Category,
			},
		});
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getPostById = async (req, res) => {
	try {
		const post = await Post.findOne({
			where: {
				uuid: req.params.uuid,
			},
		});
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createPost = async (req, res) => {
	const { title, content, categoryId } = req.body;
	try {
		const post = await Post.create({
			title: title,
			content: content,
			categoryId: categoryId,
		});
		res.status(201).json(post);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const updatePost = async (req, res) => {
	const { title, content, categoryId } = req.body;
	try {
		await Post.update(
			{ title, content, categoryId },
			{
				where: {
					uuid: req.params.uuid,
				},
			}
		);

		res.status(200).json({ msg: "Post updated successfully!" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deletePost = async (req, res) => {
	try {
		await Post.destroy({
			where: {
				uuid: req.params.uuid,
			},
		});
		res.status(200).json({ msg: "Post deleted successfully!" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
