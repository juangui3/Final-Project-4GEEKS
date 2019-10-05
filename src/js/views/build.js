import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/build.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class Build extends React.Component {
	constructor(props) {
		super(props);
		// No llames this.setState() aquí!
		this.state = { stock: [] };
	}
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background">
					<div className="container my-build">
						<div className="col build-my-meal">
							<h1>Build My Meal</h1>
						</div>
					</div>
					<div className="container my-tables-build">
						<div className="row">
							<div className="col border rounded my-col-ing-stock">
								<h3>List of Ingredients</h3>

								<table className="table table-hover">
									<thead>
										<tr>
											<th scope="col" className="select-checkbox">
												Select
											</th>
											<th scope="col">
												Ingredients{" "}
												<input
													className="search-input"
													type="text"
													name="search"
													placeholder="Search..."
												/>
											</th>
										</tr>
									</thead>
									<tbody>
										<Context.Consumer>
											{({ store, actions }) => {
												{
													if (store.ingredients) {
														return store.ingredients.map((item, index) => {
															return (
																<tr key={index}>
																	<th scope="row">
																		<input
																			onChange={e =>
																				this.setState({
																					stock: this.state.stock.concat({
																						id_ingrediente: item.id,
																						id_profile: store.currentUserId,
																						quantity: "1"
																					})
																				})
																			}
																			type="checkbox"
																			aria-label="Checkbox for following text input"
																		/>
																	</th>
																	<td>{item.name}</td>
																</tr>
															);
														});
													} else {
														<tr>
															<th scope="row">
																<input
																	type="checkbox"
																	aria-label="Checkbox for following text input"
																/>
															</th>
															<td>Loading ...</td>
														</tr>;
													}
												}
											}}
										</Context.Consumer>
									</tbody>
								</table>
								<div className="row btns-build">
									<Context.Consumer>
										{({ store, actions }) => {
											return (
												<button
													onClick={() => actions.buildStock(this.state.stock)}
													type="submit"
													className="btn btn-success btn-add">
													Add <i className="fas fa-arrow-circle-right" />
												</button>
											);
										}}
									</Context.Consumer>
								</div>
							</div>

							<div className="col border rounded my-col-ing-stock">
								<h3>My Stock</h3>
								<table className="table table-hover">
									<thead>
										<tr>
											<th scope="col" className="select-checkbox">
												Select
											</th>
											<th scope="col">
												Ingredients{" "}
												<input
													className="search-input"
													type="text"
													name="search"
													placeholder="Search..."
												/>
											</th>
										</tr>
									</thead>
									<tbody>
										<Context.Consumer>
											{({ store, actions }) => {
												return store.userStock.map((item, index) => {
													return (
														<tr key={index}>
															<th scope="row">
																<input
																	type="checkbox"
																	aria-label="Checkbox for following text input"
																/>
															</th>
															<td>{item.name}</td>
														</tr>
													);
												});
											}}
										</Context.Consumer>
									</tbody>
								</table>
								<button type="button" className="btn btn-danger btn-remove">
									Remove <i className="fas fa-trash-alt" />
								</button>
								<button type="button" className="btn btn-success btn-add">
									Generate <i className="fas fa-utensils" />
								</button>
							</div>
						</div>

						{/*<div className="card mb-3 my-build-receipt">
							<img
								className="card-img-top"
								src="https://i.ibb.co/hg5TRvc/Slide1.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Recipe</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer. This is a wider card with supporting
									text below as a natural lead-in to additional content. This content is a little bit
									longer. This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer. This is a wider card with
									supporting text below as a natural lead-in to additional content. This content is a
									little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div className="card mb-3 my-build-receipt">
							<img
								className="card-img-top"
								src="https://i.ibb.co/3hqVrW1/Slide2.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Recipe</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer. This is a wider card with supporting
									text below as a natural lead-in to additional content. This content is a little bit
									longer. This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer. This is a wider card with
									supporting text below as a natural lead-in to additional content. This content is a
									little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>*/}

						<div className="row my-build-receipt">
							<div className="container my-h3-titles">
								<h3>Generated Recipes</h3>
							</div>
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body">
										<img
											className="card-img-top"
											src="https://i.ibb.co/n7DDtgs/recetas-001.jpg"
											alt="Card image cap"
										/>
										<h5 className="card-title my-title-card">Food Recipe Name</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
										<a href="#" className="btn btn-success">
											Download <i className="fas fa-download" />
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body">
										<img
											className="card-img-top"
											src="https://i.ibb.co/fS5MCzQ/recetas-002.jpg"
											alt="Card image cap"
										/>
										<h5 className="card-title my-title-card">Food Recipe Name</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
										<a href="#" className="btn btn-success">
											Download <i className="fas fa-download" />
										</a>
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
