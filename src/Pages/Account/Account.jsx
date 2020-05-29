import React from "react";
import HBCard from "../../Components/Home-Blog-Card/Card";
import "./Account.scss";
const Account = props => {
	let displayedUser = props.users.filter(u => u._id === props.id)[0];
	let currentUser = props.currentUser;
	const renderFollowing = () => {
		return displayedUser.following.map(f => {
			return (
				<div key={f} className="col-6" onClick={() => props.openAccount(f)}>
					<div className="following-name col-8">
						{props.users.filter(u => u._id === f)[0].name}
					</div>
					<div className="following-username col-3">
						<span className="font-myGold">@</span>
						{props.users.filter(u => u._id === f)[0].username}
					</div>
				</div>
			);
		});
	};
	const renderBlogs = () => {
		const rederedBlogs = props.blogs.filter(
			f => f.userId === displayedUser._id
		);
		return rederedBlogs.map(r => {
			const user = props.users.filter(u => u._id === r.userId)[0];
			return (
				<HBCard
					key={r._id}
					id={r._id}
					pagePositioningClasses="col-3 blog-card"
					imgURL={r.imgURL}
					title={r.title}
					author={user.name}
					openBlog={() => props.openBlog(r._id)}
				/>
			);
		});
	};
	return (
		<div className="account">
			<div className="cover"></div>
			<div className="account-image"></div>
			<div className="account-info">
				<div className="account-name">{displayedUser.name}</div>
				<div className="account-username">
					<span className="font-myGold">@</span>
					{displayedUser.username}
				</div>
			</div>
			<button
				className={`accountbtn`}
				style={{
					display: `${displayedUser._id === currentUser._id ? "none" : ""}`
				}}
				onClick={() => props.toggleFollow(props.id)}
			>
				{currentUser.following.filter(f => f === displayedUser._id).length === 0
					? "follow +"
					: "unfollow"}
			</button>
			<button
				className={`accountbtn`}
				style={{
					display: `${displayedUser._id !== currentUser._id ? "none" : ""}`
				}}
				onClick={() => props.addBlogInvoker()}
			>
				add blog +
			</button>
			<div
				className="account-follow col-8 m-auto"
				style={{
					display: `${displayedUser._id !== currentUser._id ? "none" : ""}`
				}}
			>
				<div className="row justify-content-center mt-5 mb-4 following-header">
					<span className="font-myGold">Y</span>ou
					<span className="font-myRed ml-2">A</span>re{" "}
					<span className="font-myViolet ml-2">F</span>ollowing{" "}
				</div>
				<div className="following-body">{renderFollowing()}</div>
			</div>
			<div className="account-blogs col-12 m-auto">
				<div className="row justify-content-center mt-5 mb-4 following-header">
					<span className="font-myOrange">B</span>logs
					<span className="font-myMaroon ml-2">P</span>ublished{" "}
				</div>
				<div className="row flex justify-content-around  mt-3">
					{renderBlogs()}
				</div>
			</div>
		</div>
	);
};

export default Account;
