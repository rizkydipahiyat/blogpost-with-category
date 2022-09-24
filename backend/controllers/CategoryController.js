import Category from "../models/CategoryModel.js";

export const getCategories = async (req, res) => {
	try {
		const categories = await Category.findAll();
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getCategoryById = async (req, res) => {
	try {
		const category = await Category.findOne({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createCategory = async (req, res) => {
	try {
		const { name } = req.body;
		const category = await Category.create({
			name: name,
		});
		res.status(201).json(category);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
