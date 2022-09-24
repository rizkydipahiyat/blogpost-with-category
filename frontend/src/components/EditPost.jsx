import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [category, setCategory] = useState([]);

	const { uuid } = useParams();

	useEffect(() => {
		const getPostById = async () => {
			const { data } = await axios.get(`http://localhost:5000/post/${uuid}`);
			setTitle(data.title);
			setContent(data.content);
			setCategoryId(data.categoryId);
		};
		getPostById();
		getCategories();
	}, []);

	const getCategories = async () => {
		const { data } = await axios.get("http://localhost:5000/category");
		setCategory(data);
	};

	const handleEditPost = async (e) => {
		e.preventDefault();
		await axios.patch(`http://localhost:5000/edit/${uuid}`, {
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
			<form onSubmit={handleEditPost}>
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
					<button className="btn btn-dark w-100">Update</button>
				</div>
			</form>
		</div>
	);
};

export default EditPost;
