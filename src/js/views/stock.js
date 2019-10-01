import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/stock.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class Stock extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-stock">
						<div className="col h1-my-stock">
							<h1>My Stock</h1>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
