import React from "react";
import logo from "./images/hangman-logo.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <NavLink className="Logo" to="/">
        <img src={logo} alt="logo" />
        <span>hangman</span>
      </NavLink>
      <div className="mobile">
        <nav>
          <ul className="NavOptions">
            <li>
              <NavLink exact activeClassName="active_class" to="/inst">
                INSTRUCTIONS
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active_class" to="/Rank">
                LEADERBOARD
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active_class" to="/quiz">
                CUSTOM QUIZ
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink exact to="/login-signup">
          <button className="LoginSignup">LOGIN / SIGNUP</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar;
