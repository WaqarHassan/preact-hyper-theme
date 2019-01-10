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
import { Provider } from "preact-redux";
import store from "../store";
import { setCurrentUser } from "../actions/authActions";
import setAuthToken from "../utils/setAuthToken";

if (localStorage.jwtToken) {
  // set Auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info exp
  // const decode = jwt_decode(localStorage.jwtToken);
  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(localStorage.jwtToken));

  // check for expired token
  // const currentTime = Date.now() / 1000;
  // if (decode.exp < currentTime) {
  //   // logout the user
  //   store.dispatch(logoutUser());
  //   // TODO: clear current Profile

  //   // Redirect to login
  //   window.location.href = "/login";
  // }
}

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}
