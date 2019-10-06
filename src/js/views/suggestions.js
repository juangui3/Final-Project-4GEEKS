import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/suggestions.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavDropdown, Form, Button } from "reactstrap";
import { Recipe } from "../component/recipe";

export class Suggestions extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-build">
						<div className="col build-my-meal">
							<h1>Suggestions</h1>
						</div>
						<div className="container cont-suggestions">
							<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
								<DropdownToggle caret>Filter Recipes by</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>Calories</DropdownItem>
									<DropdownItem>Ingredients</DropdownItem>
									<DropdownItem>Prices</DropdownItem>
								</DropdownMenu>
							</Dropdown>

							<div className="row my-sugg">
								<div className="col history-col">
									<Recipe />
								</div>
								<div className="col history-col">
									<Recipe />
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
