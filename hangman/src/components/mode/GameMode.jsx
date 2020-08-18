import React from "react";
import { Link } from "react-router-dom";
const GameMode = () => {
  return (
    <div class="main-page-card">
      <div class="main-card" id="card1">
        <Link exact to="/category">
          <p id="solo">SOLO MODE</p>
        </Link>
      </div>

      <div class="main-card" id="card2">
        <Link exact to="/category">
          <p id="solo">DUO MODE</p>
        </Link>
      </div>
    </div>
  );
};

export default GameMode;
