import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/help.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class Help extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-build">
						<div className="col build-my-meal">
							<h1>Help - Questions & Answers</h1>
						</div>
					</div>
					<div className="container my-help">
						<div className="row">
							<div className="col-4">
								<div className="list-group" id="myList" role="tablist">
									<a
										className="list-group-item list-group-item-action active"
										data-toggle="list"
										href="#shrewd"
										role="tab">
										What is Shrewd Food?
									</a>
									<a
										className="list-group-item list-group-item-action"
										data-toggle="list"
										href="#pay"
										role="tab">
										Do I have to pay for updates?
									</a>
									<a
										className="list-group-item list-group-item-action"
										data-toggle="list"
										href="#secure"
										role="tab">
										Is my personal information secure?
									</a>
									<a
										className="list-group-item list-group-item-action"
										data-toggle="list"
										href="#questions"
										role="tab">
										If I have questions, is there someone I can talk to?
									</a>
									<a
										className="list-group-item list-group-item-action"
										data-toggle="list"
										href="#install"
										role="tab">
										Do I have to install anything?
									</a>
									<a
										className="list-group-item list-group-item-action"
										data-toggle="list"
										href="#cancel"
										role="tab">
										How do I cancel?
									</a>
								</div>
							</div>
							<div className="col-8">
								<div className="tab-content">
									<div className="tab-pane active" id="shrewd" role="tabpanel">
										1
									</div>
									<div className="tab-pane" id="pay" role="tabpanel">
										2
									</div>
									<div className="tab-pane" id="secure" role="tabpanel">
										3
									</div>
									<div className="tab-pane" id="questions" role="tabpanel">
										4
									</div>
									<div className="tab-pane" id="install" role="tabpanel">
										5
									</div>
									<div className="tab-pane" id="cancel" role="tabpanel">
										6
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
