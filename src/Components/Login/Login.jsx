import React from "react";
import "./Login.scss";
const Login = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-8 ">
					<form className="login">
						<input type="text" id="login-username" placeholder="Username ..." />
						<input
							type="password"
							id="login-password"
							placeholder="Password ..."
						/>
						<input
							type="submit"
							id="login-submit"
							value="Login"
							className="col-4 "
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
