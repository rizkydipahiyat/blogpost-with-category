import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AddPost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const { data } = await axios.get("http://localhost:5000/category");
		setCategory(data);
	};

	const handleAddPost = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/create/post", {
			title: title,
			content: content,
			categoryId: categoryId,
		});
		setTitle("");
		setContent("");
		setCategoryId("");
	};
	return (
		<div className="container">
			<form onSubmit={handleAddPost}>
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Content</label>
					<textarea
						type="text"
						className="form-control"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
				</div>
				<div className="form-group">
					<label>Category</label>
					<select
						className="form-select"
						value={categoryId}
						onChange={(e) => setCategoryId(e.target.value)}
					>
						<option>Choose a category</option>
						{category.map((ctg, i) => (
							<option key={i} value={ctg.id}>
								{ctg.name}
							</option>
						))}
					</select>
				</div>
				<div className="mt-3">
					<button className="btn btn-dark w-100">Save</button>
				</div>
			</form>
		</div>
	);
};

export default AddPost;
