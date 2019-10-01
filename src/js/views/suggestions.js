import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/suggestions.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class Suggestions extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-build">
						<div className="col build-my-meal">
							<h1>Suggestions</h1>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
