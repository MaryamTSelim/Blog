import React, { useState } from "react";
import "./AddBlog.scss";
const AddBlog = props => {
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [blog, setBlog] = useState("");
	return (
		<div className="add-blog">
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={event => setTitle(event.target.value)}
				className="title"
				required
			/>
			<input
				type="text"
				placeholder="tags sperated by ,"
				value={tags}
				onChange={event => setTags(event.target.value)}
				className="tags"
				required
			/>
			<textarea
				type="text"
				placeholder="blog"
				value={blog}
				onChange={event => setBlog(event.target.value)}
				className="blog"
				required
			></textarea>

			<button
				onClick={() => {
					let myTags = tags.split(",");
					props.addBlogHandler(title, myTags, blog);
				}}
				className="post"
			>
				Post
			</button>
			<button
				onClick={() => {
					props.cancelAddBlog();
				}}
				className="cancel"
			>
				Cancel
			</button>
		</div>
	);
};

export default AddBlog;
