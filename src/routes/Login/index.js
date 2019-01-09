import { h, Component } from "preact";
// import { Link } from "preact-router/match";
import style from "./style";
import { loginUser } from "../../actions/authActions";
import { connect } from "preact-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password
    };
    debugger;

    this.props.loginUser(loginData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      tthis.props.history.push("/admin/orders");
    }
  }

  render() {
    return (
      <body class="authentication-bg">
        <div class="account-pages mt-5 mb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card">
                  <div class="card-header pt-4 pb-4 text-center bg-primary">
                    <a href="index.html">
                      <span>
                        <img src="assets/images/logo.png" alt="" height="18" />
                      </span>
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="text-center w-75 m-auto">
                      <h4 class="text-dark-50 text-center mt-0 font-weight-bold">
                        Sign In
                      </h4>
                      <p class="text-muted mb-4">
                        Enter your email address and password to access admin
                        panel.
                      </p>
                    </div>

                    <form action="#" onSubmit={this.onSubmit}>
                      <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input
                          class="form-control"
                          type="email"
                          id="emailaddress"
                          required="true"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div class="form-group">
                        <a
                          href="pages-recoverpw.html"
                          class="text-muted float-right"
                        >
                          <small>Forgot your password?</small>
                        </a>
                        <label for="password">Password</label>
                        <input
                          class="form-control"
                          type="password"
                          required="true"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          id="password"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div class="form-group mb-3">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="checkbox-signin"
                            checked
                          />
                          <label
                            class="custom-control-label"
                            for="checkbox-signin"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div class="form-group mb-0 text-center">
                        <button class="btn btn-primary" type="submit">
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-12 text-center">
                    <p class="text-muted">
                      Don't have an account?
                      <a href="pages-register.html" class="text-dark ml-1">
                        <b>Sign Up</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-alt">
          2018 © Hyper - Coderthemes.com
        </footer>
      </body>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

// export default Login;
