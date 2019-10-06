import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/history.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Recipe } from "../component/recipe";
import { Context } from "../store/appContext";

export class Items extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background back-my-hist">
					<div className="container my-history">
						<div className="col build-my-meal">
							<h1>Items</h1>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col history-col">
								<div className="container my-h3-titles-hist">
									<h3>Quickly search for the best prices and locations</h3>
								</div>
							</div>
						</div>

						<div className="container my-tables-build">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Enter product's name here..."
									aria-label="Enter product's name here..."
									aria-describedby="button-addon2"
								/>
								<div className="input-group-append">
									<button className="btn btn-success" type="button" id="button-addon2">
										Search
									</button>
								</div>
							</div>

							<div className="row">
								<div className="col border rounded my-col-ing-stock">
									<table className="table table-hover">
										<thead>
											<tr>
												<th scope="col">Product</th>
												<th scope="col">Price</th>
												<th scope="col">Supermarket</th>
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
																							id_profile:
																								store.currentUserId,
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
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
