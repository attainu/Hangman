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
import Fetch from "./Fetch"
import Category from './components/Category/Category'
import "./components/Category/Category.css"
import "./components/Card/Card.css"
import Words from "./components/SoloMode/Words"
import LoginSignup from "./components/login-signup/LoginSignup"
import "./components/login-signup/LoginSignup.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Fetch/>
      <Switch>
        <Route exact path='/' component={GameMode}/>
        <Route exact path='/inst' component={Inst}/>
        <Route exact path='/quiz' component={CustomQuiz}/>
        <Route exact path='/category' component={Category}/>
        <Route exact path='/word/:end' component={Words}/>
        <Route exact path='/word/login-signup' component={LoginSignup}/>
      </Switch>
    </div>
  );
}

export default App;
