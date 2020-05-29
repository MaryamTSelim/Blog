import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
const Header = props => {
	let [isSolid, setIsSolid] = useState(
		window.location.pathname === "/" ? "" : "colored"
	);
	return (
		<header className={`container-fluid ${isSolid} p-0`}>
			<div className="row">
				<div className="col-2 title p-1">Bloggi</div>
				<NavLink
					className="col-1 p-1 link"
					onClick={() => setIsSolid("")}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					className="col-1 p-1 link"
					onClick={() => setIsSolid("colored")}
					to="/blog"
				>
					Blog
				</NavLink>
				<NavLink
					to="/test"
					className="col-1 p-1 link"
					onClick={() => setIsSolid("colored")}
				>
					test
				</NavLink>

				<input
					type="text"
					placeholder="Search ..."
					className={`col-2  ml-auto mr-5 pl-3  align-self-center `}
					style={{ display: props.logged ? "initial" : "none" }}
					value={props.filter}
					onChange={event => {
						event.stopPropagation();
						props.handleFilteration(event.target.value);
					}}
				/>
				<NavLink
					to="/account"
					className="col-1 p-1 link"
					style={{ marginLeft: props.logged ? "initial" : "auto" }}
					onClick={() => {
						if (props.logged) {
							props.openAccount(props.currentUser._id);
						}
						setIsSolid("colored");
					}}
				>
					<FontAwesomeIcon icon={faUserCircle} className="icon" />
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
