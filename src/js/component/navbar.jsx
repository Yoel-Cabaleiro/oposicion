import React from "react";
import { Link } from "react-router-dom";

import "../../home.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/oposicion">
				<span className="navbar-brand mb-0 ms-4 h1">Inicio</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
