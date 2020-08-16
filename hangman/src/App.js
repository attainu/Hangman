import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/navbar/Navbar"
import "./components/navbar/Navbar.css"
import GameMode from "../src/components/mode/GameMode"
import "../src/components/mode/GameMode.css"
import {Route,Switch} from "react-router-dom";
import Inst from "./components/instruction/Inst"
import "./components/instruction/Inst.css"
import CustomQuiz from "./components/CustomQuiz/CustomQuiz"
import "./components/CustomQuiz/CustomQuiz.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={GameMode}/>
        <Route exact path='/inst' component={Inst}/>
        <Route exact path='/quiz' component={CustomQuiz}/>
      </Switch>
    </div>
  );
}

export default App;
