import React from "react";

const CustomQuiz = () => {
  return (
    <div class="customQuiz">
      <div class="left">
        <div class="title">
          <div id="title-box">TITLE</div>
          <input type="text" placeholder="Enter Title Here . . . ." />
        </div>
        <div class="words">
          <div class="words-heading">WORD</div>
          <input
            class="input-word"
            type="text"
            placeholder="Enter Word Here . . ."
          />
          <button class="add-word">Add Word</button>
        </div>
      </div>
      <div class="right"></div>
    </div>
  );
}

export default CustomQuiz;