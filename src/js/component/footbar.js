import React from "react";
import { func } from "prop-types";
import "bootstrap";

export function FootBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top mt-5">
			<a className="navbar-brand text-white mx-auto" href="#">
				<small>Copyright© My Website 2021</small>
			</a>
		</nav>
	);
}
