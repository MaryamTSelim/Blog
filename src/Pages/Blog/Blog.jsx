import React, { useState } from "react";
import "./Blog.scss";
import HBCard from "../../Components/Home-Blog-Card/Card";

const Blog = props => {
	const renderBlogs = blog => {
		const user = props.users.filter(u => u._id === blog.userId)[0];
		return (
			<HBCard
				key={blog._id}
				id={blog._id}
				pagePositioningClasses="col-3"
				imgURL={blog.imgURL}
				title={blog.title}
				author={user.name}
				openBlog={props.openBlog}
			/>
		);
	};
	return <div className="blog">{props.posts.map(p => renderBlogs(p))}</div>;
};

export default Blog;
