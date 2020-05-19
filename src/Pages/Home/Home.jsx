import React from "react";
import Slider from "../../Components/Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/Card";
import "./Home.scss";

const Home = () => {
	return (
		<div className="container-fluid home">
			<div className="row">
				<Slider />
			</div>
			<div className="row mt-4 home-indicator-container">
				<FontAwesomeIcon icon={faAngleDown} className="home-indicator" />
			</div>
			<div className="row justify-content-center mt-5 mb-4 content-header">
				<span className="font-myGold">B</span>e
				<span className="font-myOrange ml-2">P</span>art{" "}
				<span className="font-myRed ml-2">O</span>f{" "}
				<span className="font-myMaroon ml-2">O</span>ur
				<span className="font-myViolet ml-2">C</span>ommunity
			</div>
			<div className="row justify-content-space mt-3">
				<Card
					pagePositioningClasses="col-3 home-child"
					imgURL="/Home-Cards-Covers/browse.jpg"
					angleColor="font-myGold"
					title="Browse"
					body="Browse through thousands of different variety of blogs"
				/>
				<Card
					pagePositioningClasses="col-3 home-child"
					imgURL="/Home-Cards-Covers/logining.jpg"
					angleColor="font-myRed"
					title="Login"
					body="Sign-in and have the ability to search , follow and more"
				/>
				<Card
					pagePositioningClasses="col-3 home-child"
					imgURL="/Home-Cards-Covers/share.jpg"
					angleColor="font-myViolet"
					title="Share"
					body="Share with us your story and connect with your audience"
				/>
			</div>
		</div>
	);
};

export default Home;
