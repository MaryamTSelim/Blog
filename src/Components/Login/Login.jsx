import React, { useState } from "react";
import "./Login.scss";
const Login = props => {
	const users = props.users;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const loginCheckup = event => {
		event.preventDefault();
		let user = users.filter(u => u.username === username)[0];
		if ((user !== undefined && user.password) === password) {
			props.login(user);
			props.history.push("/account");
		} else {
			if (user === undefined) {
				setErrMsg("User does not exist");
			} else {
				setErrMsg("Password is not incorrect");
			}
		}
	};
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-8 ">
					<form className="login">
						<input
							type="text"
							id="login-username"
							placeholder="Username ..."
							value={username}
							onChange={event => setUsername(event.target.value)}
							required
						/>
						<input
							type="password"
							id="login-password"
							placeholder="Password ..."
							value={password}
							onChange={event => setPassword(event.target.value)}
							required
						/>
						<label className="errMsg">{errMsg}</label>
						<input
							type="submit"
							id="login-submit"
							value="Login"
							className="col-4 "
							onClick={event => {
								loginCheckup(event);
							}}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
