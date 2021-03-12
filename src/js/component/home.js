import React from "react";
import { NavBar } from "./navbar.js";
import { Body } from "./body.js";
import { FootBar } from "./footbar.js";
import { func } from "prop-types";
import "bootstrap";
//-----------------Container-----------------------------------------
export function Home() {
	return (
		<>
			<NavBar />
			<Body />
			<FootBar />
		</>
	);
}
