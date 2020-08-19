import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomQuiz = () => {
  const [InputItem, setInputItem] = useState("");
  const [Items, setItems] = useState([]);
  const refresh = (event) => {
    // const [inputItem, setInputItem] = useState("nelloname");
    setInputItem(event.target.value);
  };

  const listItem = () => {
    setItems((oldItems) => {
      return [...oldItems, InputItem];
    });
    setInputItem("");
  };
  return (
    <div class="customQuiz">
      <div class="left">
        <div class="title">
          <div id="title-box">TITLE</div>
          <input type="text" placeholder="Enter Title Here . . . ."  required/>
        </div>
        <div class="words">
          <div class="words-heading">WORD</div>
          <input
            class="input-word"
            type="text"
            placeholder="Enter Word Here . . ."
            onChange={refresh}
            value={InputItem}
          />
          <button class="add-word" onClick={listItem}>
            Add Word
          </button>
        </div>
        {/* <div class="sub">
          <NavLink exact to="/q">
            <p>SUBMIT</p>
          </NavLink>
        </div> */}
      </div>
      <div class="right">
        <h class="wordtittle">WORDS</h>
        <hr />
        <ol class="list">
          {Items.map((itemval) => {
            return <li>{itemval}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default CustomQuiz;
