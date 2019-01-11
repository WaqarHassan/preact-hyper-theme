// import React from "preact";
import { h, Component } from "preact";

import { Route, route } from "preact-router";
import { connect } from "preact-redux";

const AdminRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true && auth.user.role == "admin" ? (
        <Component {...props} />
      ) : (
        route("/login")
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
