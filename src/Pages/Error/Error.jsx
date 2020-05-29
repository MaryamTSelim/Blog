import React from "react";
import "./Error.scss";
const Error = () => {
	return (
		<div className="container error-page flex-column justify-content-center align-items-center">
			<div className="row display-flex flex-column justify-content-center align-items-center mt-5 header">
				Error 404
			</div>
			<div className="row display-flex justify-content-center align-items-center ">
				<img
					src={`${process.env.PUBLIC_URL}/Error-Page/confused.gif`}
					alt="confused"
				/>
			</div>
			<div className="row display-flex justify-content-center align-items-center mt-3">
				You have requested a page we dont know
			</div>
		</div>
	);
};

export default Error;
