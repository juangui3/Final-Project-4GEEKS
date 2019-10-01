import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/history.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Recipe } from "../component/recipe";

export class History extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background back-my-hist">
					<div className="container my-history">
						<div className="col build-my-meal">
							<h1>History</h1>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col history-col">
								<div className="container my-h3-titles-hist">
									<h3>Generated Recipes</h3>
								</div>
								<Recipe />
							</div>
							<div className="col history-col">
								<div className="container my-h3-titles-hist">
									<h3>Recommended Recipes</h3>
								</div>
								<Recipe />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
