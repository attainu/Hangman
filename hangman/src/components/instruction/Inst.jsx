import React from "react";

const Inst = () => {
  return (
    <div class="instruction">
      <p class="how-to-play">HOW TO PLAY</p>
      <p class="points">
        Hangman is an old school favorite, a word game where the goal is simply
        to find the missing word or words.
      </p>
      <p class="points">
        You will be presented with a number of blank spaces representing the
        missing letters you need to find.
      </p>
      <p class="points">
        Use the keyboard to guess a letter (I recommend starting with vowels).
      </p>
      <p class="points">
        If your chosen letter exists in the answer, then all places in the
        answer where that letter appear will be revealed.
      </p>
      <p class="points">
        After you've revealed several letters, you may be able to guess what the
        answer is and fill in the remaining letters.
      </p>

      <p class="points">
        Be warned, every time you guess a letter wrong you loose a life and the
        hangman begins to appear, piece by piece.
      </p>
      <p class="points">Solve the puzzle before the hangman dies.</p>
    </div>
  );
}

export default Inst;