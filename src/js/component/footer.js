import React, { Component } from "react";
import footer from "../../styles/footer.scss";

export const Footer = () => (
	<div className="jumbotron jumbotron-fluid mb-0">
		<div className="container">
			<div className="row">
				<div className="col col-footer">
					<h1 className="display-4">Shrewd food</h1>
				</div>
				<div className="col social">
					<i className="fab fa-facebook fa-2x" />
					<i className="fab fa-instagram fa-2x" />
					<i className="fab fa-twitter fa-2x" />
					<i className="fab fa-youtube fa-2x" />
					<i className="fab fa-linkedin-in fa-2x" />
					<i className="fab fa-github fa-2x" />
				</div>
			</div>
			<hr className="my-4" />
			<p className="lead">Copyright © 2019 - Shrewd food. All rights reserved.</p>
			<p className="lead">
				Contact us: <strong>info@shrewdfood.com</strong>
			</p>
		</div>
	</div>
);
