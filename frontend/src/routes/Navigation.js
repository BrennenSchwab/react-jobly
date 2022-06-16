import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";
import "./Navigation.css";

/* NavBar to be used site wide
 * 
 * Shows user accessible links if there is a logged in user;
 * otherwise it shows a login and signup link to new users.
 * 
 * separate entities were created for both scenarios
 * 
*/

function Navigation(){
    return(
        <Navbar bg="light">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                      <NavLink className="nav-link" to="/companies">
                        Companies
                      </NavLink>
                    </li>
                    <li className="nav-item mr-4">
                      <NavLink className="nav-link" to="/jobs">
                        Jobs
                      </NavLink>
                    </li>
                    <li className="nav-item mr-4">
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Log out
                      </Link>
                    </li>
                </ul>
        </Navbar>
    )
}

export default Navigation;