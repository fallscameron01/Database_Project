import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Library from "../library/index";
import Wishlist from "../wishlist/index";
import DeleteAccount from "../delete-account/index";
import Login from "../login/index";
import AddNewMedia from "../add-new-media/index";
import Welcome from "../welcome/index";
import Signup from "../signup/index"

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{backgroundColor: "#6F89CB"}} className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/library">
                  <a className="nav-link" href="#" style={{color: "black", fontSize: "22px", fontWeight: "bold"}}>Library</a>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <a className="nav-link" href="#" style={{color: "black", fontSize: "22px", fontWeight: "bold"}}>Wishlist</a>
                </Link>
              </li>
              <li style={{display: "none"}}>
                <Link to="/add-new-media">
                  <a className="nav-link" href="#" id="add-new-media">&nbsp;</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/delete-account">
                  <a className="nav-link" href="#" style={{color: "red", fontSize: "22px", fontWeight: "bold"}}>Delete Account</a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a className="nav-link" href="#" style={{color: "black", fontSize: "22px", fontWeight: "bold"}}>Sign Out</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
              <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
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
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/add-new-media">
            <AddNewMedia />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}