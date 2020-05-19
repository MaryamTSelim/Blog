import React from "react";
import "./Signup.scss";
const Signup = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center align-items-stretch">
				<div className="col-8 ">
					<form className="Signin">
						<input type="text" id="signup-name" placeholder="Name ..." />
						<input
							type="text"
							id="signup-username"
							placeholder="Username ..."
						/>
						<input type="email" id="signup-email" placeholder="Email ..." />
						<input
							type="password"
							id="signup-password"
							placeholder="Password ..."
						/>
						<input
							type="submit"
							id="signup-submit"
							value="Register"
							className="col-4 "
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
