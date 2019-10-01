import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../img/LogoWhite.png";
import navbar from "../../styles/navbar.scss";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavDropdown, Form, Button } from "reactstrap";

export class Navbar extends React.Component {
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
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/home">
					<img height="50px" src={LogoWhite} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{/*<li className="nav-item active">
							<a className="nav-link" href="/stock">
								My Stock
							</a>
						</li>*/}
						<li className="nav-item active">
							<a className="nav-link" href="/build">
								Build My Meal
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="/suggestions">
								Suggestions
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="/history">
								History
							</a>
						</li>
					</ul>
				</div>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret>
						<i className="fas fa-user fa-lg" />
					</DropdownToggle>
					<DropdownMenu right>
						<Link to="/profile">
							<DropdownItem>My Profile</DropdownItem>
						</Link>
						<Link to="/help">
							<DropdownItem>Help</DropdownItem>
						</Link>
						<DropdownItem divider />
						<DropdownItem>API</DropdownItem>
						<DropdownItem divider />
						<Link to="/login">
							<DropdownItem>Logout</DropdownItem>
						</Link>
					</DropdownMenu>
				</Dropdown>
			</nav>
		);
	}
}
