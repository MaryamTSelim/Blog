import React from "react";
import "./Sign.scss";
import Signup from "../../Components/Signup/Signup";
import Login from "../../Components/Login/Login";

const Sign = () => {
	return (
		<div className="container-fluid p-3 sign">
			<div className="row">
				<div className="col-lg-6 col-sm-12 ">
					<h4 className="p-3 header">
						New User <span className="color-gold">?</span>
						<br />
						Nice to meet you <span className="color-gold">!</span>
					</h4>
					<Signup />
				</div>
				<div className="col-lg-6 col-sm-12">
					<h4 className=" p-3">
						Old User <span className="color-gold">?</span>
						<br />
						Welcome back <span className="color-gold">!</span>
					</h4>
					<Login />
				</div>
			</div>
		</div>
	);
};

export default Sign;
