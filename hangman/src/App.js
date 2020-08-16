import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/navbar/Navbar"
import "./components/navbar/Navbar.css"
import GameMode from "../src/components/mode/GameMode"
import "../src/components/mode/GameMode.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GameMode/>
    </div>
  );
}

export default App;
