import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../Core/helper/coreapicall";
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      {isAutheticated() ? (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/create")}
            className="nav-link"
            to="/create"
          >
            Create
          </Link>
        </li>
      ) : null}
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Signin
        </Link>
      </li>
      <li className="nav-item">
        <span
          className="nav-link text-warning"
          onClick={() => {
            signout(() => {
              history.push("/");
            });
          }}
        >
          Signout
        </span>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
