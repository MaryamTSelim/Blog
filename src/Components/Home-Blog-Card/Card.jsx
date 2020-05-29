import React, { useState } from "react";
import "./Card.scss";
const HBCard = props => {
	const [id] = useState(props.id);
	return (
		<div
			className={`container Home-Blog-Card ${props.pagePositioningClasses}`}
			onClick={() => props.openBlog(id)}
		>
			<div
				className={`cover col-12`}
				style={{
					backgroundImage: `url("${process.env.PUBLIC_URL + props.imgURL}")`
				}}
			>
				<div className="info">
					<div className="title">{props.title}</div>
					<div className="writer">{props.author}</div>
				</div>
			</div>
		</div>
	);
};

export default HBCard;
