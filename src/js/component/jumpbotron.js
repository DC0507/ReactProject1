import React from "react";
import { func } from "prop-types";
import "bootstrap";

export function Jumpbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-info btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
