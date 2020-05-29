import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleLeft,
	faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";
const Card = props => {
	const { pagePositioningClasses, imgURL, angleColor, title, body } = {
		...props
	};
	return (
		<div
			className={`card-container ${pagePositioningClasses} container justify-content-center`}
		>
			<div
				style={{ backgroundImage: `url(${imgURL})` }}
				className="card-image m-auto"
			></div>
			<div className="card-title mt-4 ">
				<FontAwesomeIcon
					icon={faAngleDoubleLeft}
					className={`${angleColor} card-indicator`}
				/>
				<div className="ml-2 mr-2">{title}</div>
				<FontAwesomeIcon
					icon={faAngleDoubleRight}
					className={` card-indicator ${angleColor} `}
				/>
			</div>
			<div className="card-body">{body}</div>
		</div>
	);
};

export default Card;
