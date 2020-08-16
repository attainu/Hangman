import React from 'react'
import logo from "./images/hangman-logo.svg";
import {NavLink} from "react-router-dom"
function Navbar(){
    return(
        <div className="Navbar">
      <NavLink  className="Logo" to="/"><img src={logo} alt="logo"/><span>hangman</span></NavLink>
      <div className="mobile">
      <nav>
        <ul className="NavOptions">
          <li><NavLink exact activeClassName="active_class" to="/inst">INSTRUCTIONS</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="">LEADERBOARD</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="/quiz">CUSTOM QUIZ</NavLink></li>
        </ul>
      </nav>
      <a><button className="LoginSignup">LOGIN / SIGNUP</button></a>
      </div>
    </div>
    );
}
export default Navbar;