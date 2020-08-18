import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Hangman.css";
import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: this.props.rword.toLowerCase(),
    };
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    console.log(letter);
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        class="btn btn-lg btn-primary m-2 keyboardbtn"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: this.props.rword.toLowerCase(),
    });
  };

  render() {
    this.state.answer = this.props.rword.toLowerCase();
    const gameOver = this.state.mistake >= 6;
    const isWinner =
      this.guessedWord().join("") === this.props.rword.toLowerCase();
    console.log(this.guessedWord().join(""));
    console.log(this.state.answer);
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!";
    }

    if (gameOver) {
      gameStat = "You Lost!!!";
    }

    return (
      <div className="Hangman container" id="interface">
        <div class="photoWrongGuess">
          <div className="float-right wrongguess">
            Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
          </div>
          <div className="text-center">
            <img class="hangmanframe" src={this.props.images[this.state.mistake]} alt="" />
          </div>
        </div>
        <div className="text-center">
          <p class="guessword">Guess Word</p>
          <p class="">{!gameOver ? this.guessedWord() : this.state.answer}</p>
          <p>heloo</p>
          <p class="keyboard .col-xl-8">{gameStat}</p>
          <NavLink exact to="/new">
            <button className="btn btn-info newgame">New Game</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Hangman;
