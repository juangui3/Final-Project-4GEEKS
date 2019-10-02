import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/help.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

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
						<ListGroup>
							<ListGroupItem>
								<ListGroupItemHeading>What is Shrewd Food?</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
							<ListGroupItem>
								<ListGroupItemHeading>Do I have to pay for updates?</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
							<ListGroupItem>
								<ListGroupItemHeading>Is my personal information secure?</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
							<ListGroupItem>
								<ListGroupItemHeading>
									If I have questions, is there someone I can talk to?
								</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
							<ListGroupItem>
								<ListGroupItemHeading>Do I have to install anything?</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
							<ListGroupItem>
								<ListGroupItemHeading>How do I cancel?</ListGroupItemHeading>
								<ListGroupItemText>
									Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
									varius blandit.
								</ListGroupItemText>
							</ListGroupItem>
						</ListGroup>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
