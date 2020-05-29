import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPen,
	faTrash,
	faCheck,
	faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./Blog-View.scss";
const BlogView = props => {
	let currentBlog = props.blogs.filter(b => b._id === props.id)[0];
	let blogWriter = props.users.filter(u => u._id === currentBlog.userId)[0];
	let isCurrentUserWriter = true;
	if (props.currentUser === null) {
		isCurrentUserWriter = false;
	} else {
		if (blogWriter._id !== props.currentUser._id) {
			isCurrentUserWriter = false;
		}
	}
	let [newTitle, setNewTitle] = useState(currentBlog.title);
	let [newTags, setNewTags] = useState(currentBlog.tags.join(" "));
	let [newBlog, setNewBlog] = useState(currentBlog.body);

	return (
		<div className="blog-view ">
			<div className="cover " style={{ backgroundImage: `url("/")` }}></div>
			<div className="blog-body col-8 m-auto">
				<ContentEditable
					html={`<div class="title">${newTitle}</div>`} // innerHTML of the editable div
					disabled={!props.isEditing}
					onChange={e => {
						setNewTitle(e.currentTarget.innerText);
					}}
				/>
				<ContentEditable
					html={`<div class="tags">${newTags}</div>`}
					disabled={!props.isEditing}
					onChange={e => setNewTags(e.currentTarget.innerText)}
				/>
				<div className="row">
					<div
						className="author col-6"
						onClick={() => props.openAccount(blogWriter._id)}
					>
						{blogWriter.name}
					</div>
					<button
						className={`ml-auto save ${
							isCurrentUserWriter && props.isEditing ? "" : "disable"
						}`}
						onClick={() => {
							props.saveEditing(newTitle, newTags.split(" "), newBlog);
							props.setIsEditing(false);
						}}
					>
						<FontAwesomeIcon icon={faCheck} className="icon" />
					</button>
					<button
						className={`mr-5 cancel ${
							isCurrentUserWriter && props.isEditing ? "" : "disable"
						}`}
						onClick={() => props.setIsEditing(false)}
					>
						<FontAwesomeIcon icon={faTimes} className="icon" />
					</button>
					<button
						className={`ml-auto edit ${
							isCurrentUserWriter && !props.isEditing ? "" : "disable"
						}`}
						onClick={() => props.setIsEditing(true)}
					>
						<FontAwesomeIcon icon={faPen} className="icon" />
					</button>
					<button
						className={`mr-5 delete ${
							isCurrentUserWriter && !props.isEditing ? "" : "disable"
						}`}
						onClick={() => props.deleteBlog(props.id)}
					>
						<FontAwesomeIcon icon={faTrash} className="icon" />
					</button>
				</div>
				<ContentEditable
					html={`<div class="body">${currentBlog.body}</div>`}
					disabled={!props.isEditing}
					onChange={e => setNewBlog(e.currentTarget.innerText)}
				/>
			</div>
		</div>
	);
};

export default BlogView;
