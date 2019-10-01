import React, { Component } from "react";
import recipe from "../../styles/recipe.scss";

export const Recipe = () => (
	<div className="col-sm-12">
		<div className="card">
			<div className="card-body">
				<img className="card-img-top" src="https://i.ibb.co/n7DDtgs/recetas-001.jpg" alt="Card image cap" />
				<h5 className="card-title my-title-card">Food Recipe Name</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="#" className="btn btn-success">
					Download <i className="fas fa-download" />
				</a>
			</div>
		</div>
	</div>
);
