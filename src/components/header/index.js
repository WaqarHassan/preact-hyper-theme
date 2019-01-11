import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import { logoutUser } from "../../actions/authActions";
import { connect } from "preact-redux";
import { route } from "preact-router";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      // rightMenuOpen: false
    };
  }
  componentDidMount() {}
  // onClickRightMenu(e) {
  //   this.setState({ rightMenuOpen: !this.state.rightMenuOpen });
  // }
  logoutUser() {
    this.props.logoutUser();
  }
  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.auth.isAuthenticated) {
  //     // route("/");
  //   }
  // }
  render() {
    const { auth } = this.props;
    const userLinks = (
      <a
        href=""
        class="dropdown-item notify-item"
        onClick={this.logoutUser.bind(this)}
      >
        <i class="mdi mdi-logout" />
        <span>Logout</span>
      </a>
    );
    const guestLinks = (
      <a href="/login" class="dropdown-item notify-item">
        <i class="mdi mdi-logout" />
        <span>Login</span>
      </a>
    );
    return (
      // <header class={style.header}>
      //   <h1>Preact App</h1>
      //   <nav>
      //     <Link activeClassName={style.active} href="/">
      //       Home
      //     </Link>
      //     <Link activeClassName={style.active} href="/profile">
      //       Me
      //     </Link>
      //     <Link activeClassName={style.active} href="/profile/john">
      //       John
      //     </Link>
      //   </nav>
      // </header>
      <div class="navbar-custom">
        <ul class="list-unstyled topbar-right-menu float-right mb-0">
          <li class="dropdown notification-list hide">
            <a
              class="nav-link dropdown-toggle arrow-none"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="dripicons-bell noti-icon" />
              <span class="noti-icon-badge" />
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
              <div class="dropdown-item noti-title">
                <h5 class="m-0">
                  <span class="float-right">
                    <a href="javascript: void(0);" class="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>

              <div class="slimscroll" style="max-height: 230px;">
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-primary">
                    <i class="mdi mdi-comment-account-outline" />
                  </div>
                  <p class="notify-details">
                    Caleb Flakelar commented on Admin
                    <small class="text-muted">1 min ago</small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-account-plus" />
                  </div>
                  <p class="notify-details">
                    New user registered.
                    <small class="text-muted">5 hours ago</small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon">
                    <img
                      src="../assets/images/avatar-2.jpg"
                      class="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <p class="notify-details">Cristina Pride</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-primary">
                    <i class="mdi mdi-comment-account-outline" />
                  </div>
                  <p class="notify-details">
                    Caleb Flakelar commented on Admin
                    <small class="text-muted">4 days ago</small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon">
                    <img
                      src="../assets/images/avatar-4.jpg"
                      class="img-fluid rounded-circle"
                      alt=""
                    />{" "}
                  </div>
                  <p class="notify-details">Karen Robinson</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>
                      Wow ! this admin looks good and awesome design
                    </small>
                  </p>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-heart" />
                  </div>
                  <p class="notify-details">
                    Carlos Crouch liked
                    <b>Admin</b>
                    <small class="text-muted">13 days ago</small>
                  </p>
                </a>
              </div>

              <a
                href="javascript:void(0);"
                class="dropdown-item text-center text-primary notify-item notify-all"
              >
                View All
              </a>
            </div>
          </li>

          <li
            class={`dropdown notification-list ${
              this.state.rightMenuOpen ? "show" : ""
            } kkk`}
          >
            <a
              class="nav-link dropdown-toggle nav-user arrow-none mr-0"
              data-toggle="dropdown"
              href="#"
              // onClick={this.onClickRightMenu.bind(this)}
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span class="account-user-avatar">
                <img
                  src="../assets/images/avatar-1.jpg"
                  alt="user-image"
                  class="rounded-circle"
                />
              </span>
              <span>
                <span class="account-user-name">Dominic Keller</span>
                <span class="account-position">Founder</span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown ">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-circle" />
                <span>My Account</span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-settings-variant" />
                <span>Settings</span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-lifebuoy" />
                <span>Support</span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-lock-outline" />
                <span>Lock Screen</span>
              </a>
              {auth.isAuthenticated ? userLinks : guestLinks}
            </div>
          </li>
        </ul>
        <button class="button-menu-mobile open-left disable-btn">
          <i class="mdi mdi-menu" />
        </button>
        <div class="app-search">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search..." />
              <span class="mdi mdi-magnify" />
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  { logoutUser }
)(Header);

// export default Header;
