import { h, Component } from "preact";
import { Router, Route } from "preact-router";

// import Admin from "./admin";
import Header from "./header";
import Footer from "./Footer";
// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Order from "../routes/order";
import Login from "../routes/Login";
export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        {/* <Header /> */}
        {/* <div default> Sorry! This page does not exists</div> */}

        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Login path="/login" />
          <Order path="/admin/orders" />
        </Router>
        <Footer />
      </div>
    );
  }
}
