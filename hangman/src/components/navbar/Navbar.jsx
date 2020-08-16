import React from 'react'
import logo from "./images/hangman-logo.svg";
function Navbar(){
    return(
        <div className="Navbar">
      <a className="Logo"><img src={logo} alt="logo"/><span>hangman</span></a>
      <div className="mobile">
      <nav>
        <ul className="NavOptions">
          <li><a href="instruction.html">INSTRUCTIONS</a></li>
          <li><a href="">LEADERBOARD</a></li>
          <li><a href="quiz.html">CUSTOM QUIZ</a></li>
        </ul>
      </nav>
      <a><button className="LoginSignup">LOGIN / SIGNUP</button></a>
      </div>
    </div>
    );
}
export default Navbar;