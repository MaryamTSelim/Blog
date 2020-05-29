import React, { useState } from "react";
import "./Signup.scss";
const Signup = props => {
	const users = props.users;
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const signin = event => {
		event.preventDefault();
		let user = users.filter(u => u.username === username)[0];
		if (user === undefined) {
			props.signup(name, username, password);
		} else {
			setErrMsg("User exists");
		}
	};
	return (
		<div className="container-fluid">
			<div className="row justify-content-center align-items-stretch">
				<div className="col-8 ">
					<form className="Signin">
						<input
							type="text"
							id="signup-name"
							placeholder="Name ..."
							value={name}
							onChange={event => setName(event.target.value)}
							required
						/>
						<input
							type="text"
							id="signup-username"
							placeholder="Username ..."
							value={username}
							onChange={event => setUsername(event.target.value)}
							required
						/>
						<input
							type="password"
							id="signup-password"
							placeholder="Password ..."
							value={password}
							onChange={event => setPassword(event.target.value)}
							required
						/>
						<label className="errMsg">{errMsg}</label>
						<input
							type="submit"
							id="signup-submit"
							value="Register"
							className="col-4 "
							onClick={event => {
								signin(event);
							}}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
