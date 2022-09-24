import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

const ListPost = () => {
	const { mutate } = useSWRConfig();

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const { data } = await axios.get("http://localhost:5000/posts");
		return data;
	};

	const { data } = useSWR("posts", getPosts);
	if (!data) return <h2>Loading...</h2>;

	const handleDeleteProduct = async (postId) => {
		await axios.delete(`http://localhost:5000/post/${postId}`);
		mutate("posts");
	};
	return (
		<div className="container">
			<button className="btn btn-primary">
				<NavLink to="/create/post" className="text-white">
					Add
				</NavLink>
			</button>
			<div className="d-flex">
				{data.length === 0 && <p>Tidak Ada Post</p>}
				{data.map((post, i) => (
					<div className="card me-2" style={{ width: "18rem" }} key={i}>
						<div className="card-body">
							<h5 className="card-title">{post.title}</h5>
							<h6 className="card-subtitle mb-2 text-muted">
								{post.category.name}
							</h6>
							<p className="card-text">{post.content}</p>
							<NavLink to={`/edit/${post.uuid}`}>Edit</NavLink>
							<button
								className="btn btn-danger"
								onClick={() => handleDeleteProduct(post.uuid)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListPost;
