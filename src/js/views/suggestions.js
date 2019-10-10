import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/suggestions.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavDropdown, Form, Button } from "reactstrap";
import { Recipe } from "../component/recipe";
import { Context } from "../store/appContext";

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
							<h5>Filter Recipes by:</h5>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											type="button"
											onClick={() => actions.recetaCaloria(this.state.stock)}
											className="btn btn-success btn-sug">
											Calories <i className="fas fa-fire" />
										</button>
									);
								}}
							</Context.Consumer>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											type="button"
											onClick={() => actions.recetaCaloria(this.state.stock)}
											className="btn btn-success btn-sug">
											Ingredients <i className="fas fa-seedling" />
										</button>
									);
								}}
							</Context.Consumer>

							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											type="button"
											onClick={() => actions.recetaCaloria(this.state.stock)}
											className="btn btn-success btn-sug">
											Prices <i className="fas fa-dollar-sign" />
										</button>
									);
								}}
							</Context.Consumer>

							<div className="row justify-content-md-center">
								<div className="col-6">
									<Context.Consumer>
										{({ store, actions }) => {
											return store.userRecetaCaloria.map((item, index) => {
												return (
													<tr key={index}>
														<div className="container my-build-gen" />

														<div className="row">
															<div className="col history-col">
																<div className="col-sm-12">
																	<div className="card">
																		<div className="card-body">
																			<img
																				className="card-img-top image-class mx-auto d-block"
																				src={item.image}
																				alt="Card image cap"
																			/>
																			<h5 className="card-title my-title-card">
																				{item.name}
																			</h5>
																			<p className="card-text my-rec-text">
																				{item.guianew}
																			</p>
																			<p className="card-text font-weight-bold my-rec-calory">
																				Calories: {item.calory}
																			</p>
																			<p className="card-text font-weight-bold my-rec-calory">
																				Prices at:
																			</p>
																			<p className="card-text font-weight-bold my-rec-calory">
																				Walmart: {item.calory}, Publix:{" "}
																				{item.calory}, President: {item.calory}
																			</p>
																			<a
																				href="#"
																				className="btn btn-success btn-block">
																				Download{" "}
																				<i className="fas fa-download" />
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</tr>
												);
											});
										}}
									</Context.Consumer>
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
