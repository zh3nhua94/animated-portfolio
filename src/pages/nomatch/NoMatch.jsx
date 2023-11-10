import React from "react";
import "./nomatch.scss";
import { Link } from "react-router-dom";

const NoMatch = () => {
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<h3>Oops!</h3>
					<h1>
						<span>#</span>
						<span>4</span>
						<span>0</span>
						<span>4</span>
					</h1>
				</div>
				<h2>Sorry, the page you requested was not found</h2>
				<Link to="/">
					<button>Back to Hompage</button>
				</Link>
			</div>
		</div>
	);
};

export default NoMatch;
