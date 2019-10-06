import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/build.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
import { Recipe } from "../component/recipe";

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
													}
												}
											}}
										</Context.Consumer>
									</tbody>
								</table>
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
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col">
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
							<div className="col">
								<div className="row btns-build">
									<button type="button" className="btn btn-danger btn-remove">
										Remove <i className="fas fa-trash-alt" />
									</button>
									<button type="button" className="btn btn-success btn-add">
										Generate <i className="fas fa-utensils" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="row my-build-receipt">
						<div className="container my-h3-titles">
							<h3>Generated Recipes</h3>
						</div>
					</div>
					<div className="container my-build-gen">
						<div className="row">
							<div className="col history-col">
								<Recipe />
							</div>
							<div className="col history-col">
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
