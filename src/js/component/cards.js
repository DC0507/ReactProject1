import React from "react";
//import { func } from "prop-types";
import PropTypes from "prop-types";
import "bootstrap";

function CardBody() {
	return (
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">
				This is a wider card with supporting text below as a natural
				lead-in to additional content. This content is a little bit
				longer.
			</p>
		</div>
	);
}

function CardFooter() {
	return (
		<div className="card-footer text-center">
			<a className="btn btn-info btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}

const Card = props => {
	return (
		<div className="card">
			<img src={props.src} className="card-img-top" alt="..."></img>
			<CardBody />
			<CardFooter />
		</div>
	);
};

//----------------------------------Card Deck----------------------------------

export function CardDeck() {
	return (
		<div className="card-deck">
			<Card src="https://loremflickr.com/320/240?random=1" />
			<Card src="https://loremflickr.com/320/240?random=2" />
			<Card src="https://loremflickr.com/320/240?random=3" />
			<Card src="https://loremflickr.com/320/240?random=4" />
		</div>
	);
}

//---------------------------------CardImg.props-------------------------------

Card.propTypes = {
	src: PropTypes.string
};
