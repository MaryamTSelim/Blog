import React from "react";
import Slider from "../../Components/Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/Card";
import HBCard from "../../Components/Home-Blog-Card/Card";
import "./Home.scss";

const Home = props => {
	const renderLatest = () => {
		let noOfRenderedElements =
			props.posts.length >= 3
				? 3
				: props.posts.length === 2
				? 2
				: props.posts.length === 1
				? 1
				: 0;
		let temp = props.posts;
		const rendered = temp.slice(
			props.posts.length - noOfRenderedElements,
			props.posts.length
		);

		return rendered.map(r => {
			const user = props.users.filter(u => u._id === r.userId)[0];
			return (
				<HBCard
					key={r._id}
					id={r._id}
					pagePositioningClasses="col-3"
					imgURL={r.imgURL}
					title={r.title}
					author={user.name}
					openBlog={() => props.openBlog(r._id)}
				/>
			);
		});
	};
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
			<div className="row mt-4 home-indicator-container">
				<FontAwesomeIcon icon={faAngleDown} className="home-indicator" />
			</div>
			<div className="row justify-content-center mt-5 mb-4 content-header">
				<span className="font-myGold">C</span>heck
				<span className="font-myOrange ml-2">O</span>ur{" "}
				<span className="font-myRed ml-2">L</span>atest{" "}
				<span className="font-myMaroon ml-2">P</span>ublished
				<span className="font-myViolet ml-2">B</span>logs
			</div>
			<div className="row flex justify-content-around  mt-3">
				{renderLatest()}
			</div>
		</div>
	);
};

export default Home;
