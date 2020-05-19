import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
//Sass
import "./Header.scss";
const Header = () => {
	let [isSolid, setIsSolid] = useState(
		window.location.pathname === "/" ? "" : "colored"
	);
	return (
		<header className={`container-fluid ${isSolid} p-0`}>
			<div className="row">
				<div className="col-2 title p-1">Bloggi</div>
				<NavLink
					to="/"
					className="col-1 p-1 link"
					onClick={() => setIsSolid("")}
				>
					Home
				</NavLink>
				<NavLink
					to="/blog"
					className="col-1 p-1 link"
					onClick={() => setIsSolid("colored")}
				>
					BLog
				</NavLink>
				<NavLink
					to="/about"
					className="col-1 p-1 link"
					onClick={() => setIsSolid("colored")}
				>
					About
				</NavLink>
				<NavLink
					to="/"
					className="col-1 p-1 link"
					onClick={() => setIsSolid("colored")}
				>
					Contact
				</NavLink>
				<input
					type="text"
					placeholder="Search ..."
					className="col-2  ml-auto mr-5 pl-3  align-self-center"
				/>
				<NavLink to="/account" className="col-1 p-1 link">
					<FontAwesomeIcon icon={faUserCircle} className="icon" />
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
