import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
					<button type="button" data-bs-toggle="modal" data-bs-target={"#editmodal-1"} className="btn btn-primary">Add new contact</button>
			</div>
			
		</nav>
		
	);
};
