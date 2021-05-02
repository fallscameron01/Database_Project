import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from "../library/index";
import Wishlist from "../wishlist/index";
import DeleteAccount from "../delete-account/index";
import Login from "../login/index";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/library">
                  <a className="nav-link" href="#">Library</a>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <a className="nav-link" href="#">Wishlist</a>
                </Link>
              </li>
              <li>
                <Link to="/delete-account">
                  <a className="nav-link" href="#" style={{color: "red"}}>Delete Account</a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a className="nav-link" href="#">Sign Out</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/delete-account">
            <DeleteAccount />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}