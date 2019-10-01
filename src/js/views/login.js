import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import LogoBlack from "../../img/LogoBlack.png";
import Quote1 from "../../img/Quote1.png";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export class Login extends React.Component {
	render() {
		return (
			<div className="backlogin">
				<div className="logo">
					<img src={LogoBlack} width="300px" />
				</div>
				<div className="container cont-login">
					<div className="row row-login">
						<p className="login">Login to your account</p>
						<form>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Username"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<Link to="/home">
								<button type="submit" className="btn btn-success btn-login">
									Login
								</button>
							</Link>
							<p className="forgot">Forgot password?</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
