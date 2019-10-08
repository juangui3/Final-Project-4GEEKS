import React from "react";
import LogoBlack from "../../img/LogoBlack.png";
import "../../styles/scan.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Recipe } from "../component/recipe";
import { Context } from "../store/appContext";

export class Scan extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="background back-my-hist">
					<div className="container my-history">
						<div className="col build-my-meal">
							<h1>Scan a product</h1>
						</div>
					</div>

					<div className="container my-h3-titles-hist">
						<div className="row" />
						<h3>Select a Supermarket</h3>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="exampleRadios"
								id="exampleRadios1"
								value="publix"
							/>
							<label className="form-check-label" htmlFor="exampleRadios1">
								Publix
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="exampleRadios"
								id="exampleRadios2"
								value="walmart"
							/>
							<label className="form-check-label" htmlFor="exampleRadios2">
								Walmart
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="exampleRadios"
								id="exampleRadios2"
								value="president"
							/>
							<label className="form-check-label" htmlFor="exampleRadios2">
								President
							</label>
						</div>
						<div className="container my-h3-titles-hist">
							<div className="row">
								<h3 className="title-barcode">Barcode</h3>
								<input className="form-control my-barcode" type="text" />
							</div>
						</div>
					</div>

					<div className="container my-tables-build">
						<div className="row">
							<div className="col border rounded my-col-ing-stock">
								<h3>Add / Update Products</h3>

								<form>
									<div className="form-group row my-form-prod">
										<label forHtml="ingredient" className="col-sm-2 col-form-label">
											Product
										</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control my-inp-scan"
												id="ingredient"
												placeholder="Product..."
											/>
										</div>
									</div>
									<div className="form-group row">
										<label forHtml="barcode" className="col-sm-2 col-form-label">
											Barcode
										</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control my-inp-scan"
												id="barcode"
												placeholder="Barcode..."
											/>
										</div>
									</div>
									<div className="form-group row">
										<label forHtml="supermarket" className="col-sm-2 col-form-label">
											Supermarket
										</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control my-inp-scan"
												id="supermarket"
												placeholder="Supermarket..."
											/>
										</div>
									</div>
									<div className="form-group row">
										<label forHtml="user" className="col-sm-2 col-form-label">
											User
										</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control my-inp-scan"
												id="user"
												placeholder="User..."
											/>
										</div>
									</div>
									<div className="form-group row">
										<label forHtml="price" className="col-sm-2 col-form-label">
											Price
										</label>
										<div className="col-sm-10">
											<input
												type="number"
												className="form-control my-inp-scan"
												id="price"
												placeholder="Price..."
												step="any"
											/>
										</div>
									</div>
								</form>
								<div className="row btns-build">
									<button type="button" className="btn btn-primary btn-new">
										New <i className="far fa-file" />
									</button>
									<button type="button" className="btn btn-success btn-save">
										Save <i className="far fa-save" />
									</button>
								</div>
							</div>

							<div className="col border rounded my-col-ing-stock">
								<h3>Available Products</h3>

								<table className="table table-hover">
									<thead>
										<tr>
											<th scope="col">Update</th>
											<th scope="col">
												Product{" "}
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
																		<button
																			type="button"
																			className="btn btn-success btn-sm">
																			<i className="fas fa-arrow-left" /> Add
																		</button>
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
				<Footer />
			</React.Fragment>
		);
	}
}
