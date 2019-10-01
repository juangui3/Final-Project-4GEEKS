import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="text-center mt-5">
						<h2>Welcome to...</h2>
						<p>
							<img src={LogoBlack} width="500px" />
						</p>
						<h5>The first system that helps you to eat healthy at the best price</h5>
						<div className="my-5">
							<img src={Quote1} width="500px" />
						</div>
						{/* <a href="#" className="btn btn-success">
					Start
				</a> */}
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
