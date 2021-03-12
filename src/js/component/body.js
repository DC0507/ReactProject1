import React from "react";
//import { func } from "prop-types";
import PropTypes from "prop-types";
import "bootstrap";
import { Jumpbotron } from "./jumpbotron.js";
import { CardDeck } from "./cards.js";

export function Body() {
	return (
		<div className="container my-4">
			<Jumpbotron />
			<CardDeck />
		</div>
	);
}
