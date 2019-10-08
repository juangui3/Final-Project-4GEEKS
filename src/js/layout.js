import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { SignUp } from "./views/signup";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Profile } from "./views/profile";
import { Stock } from "./views/stock";
import { Build } from "./views/build";
import { Suggestions } from "./views/suggestions";
import { History } from "./views/history";
import { Help } from "./views/help";
import { Items } from "./views/items";
import { Scan } from "./views/scan";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/demo" component={Demo} />
							<Route path="/home" component={Home} />
							<Route path="/signup" component={SignUp} />
							<Route path="/profile" component={Profile} />
							<Route path="/stock" component={Stock} />
							<Route path="/build" component={Build} />
							<Route path="/suggestions" component={Suggestions} />
							<Route path="/history" component={History} />
							<Route path="/help" component={Help} />
							<Route path="/login" component={Login} />
							<Route path="/items" component={Items} />
							<Route path="/scan" component={Scan} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
