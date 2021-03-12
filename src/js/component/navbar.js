import React from "react";
import PropTypes from "prop-types";
import "bootstrap";

const NavLi = props => {
	return (
		<li className="nav-item ">
			<a
				className={
					"nav-link" + " " + props.textColor + " " + props.state
				}
				href="#">
				{props.content} <span className="sr-only">(current)</span>
			</a>
		</li>
	);
};

//--------------------------------Navbar---------------------------------------

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-white mx-3" href="#">
				Start Bootstrap
			</a>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarSupportedContent">
				<ul className="nav">
					<NavLi
						content="Home"
						textColor="text-white"
						state="active"
					/>
					<NavLi content="About" state="disabled" />
					<NavLi content="Services" state="disabled" />
					<NavLi content="Contact" state="disabled" />
				</ul>
			</div>
		</nav>
	);
};

//----------------------------NavLi.props------------------------------------------

NavLi.propTypes = {
	content: PropTypes.string,
	textColor: PropTypes.string,
	state: PropTypes.string
};

NavBar.propTypes = {
	navBrand: PropTypes.string
};
