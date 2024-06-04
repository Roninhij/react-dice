import React, { useEffect, useState } from "react";
import "./App.css";
import die1 from "./dice-1.png";
import die2 from "./dice-2.png";
import die3 from "./dice-3.png";
import die4 from "./dice-4.png";
import die5 from "./dice-5.png";
import die6 from "./dice-6.png";

function Dice() {
  const [target, setTarget] = useState(0);
  const [startButtonClicked, setStartButtonClicked] = useState(false);
  const [rollDiceButtonClicked, setRollDiceButtonClicked] = useState(false);
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(1);
  function handleRollDiceButtonClicked() {
    setRollDiceButtonClicked(true);
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    if (dice1 === 1) {
      setDiceOne(die1);
    } else if (dice1 === 2) {
      setDiceOne(die2);
    } else if (dice1 === 3) {
      setDiceOne(die3);
    } else if (dice1 === 4) {
      setDiceOne(die4);
    } else if (dice1 === 5) {
      setDiceOne(die5);
    } else if (dice1 === 6) {
      setDiceOne(die6);
    }
    if (dice2 === 1) {
      setDiceTwo(die1);
    } else if (dice2 === 2) {
      setDiceTwo(die2);
    } else if (dice2 === 3) {
      setDiceTwo(die3);
    } else if (dice2 === 4) {
      setDiceTwo(die4);
    } else if (dice2 === 5) {
      setDiceTwo(die5);
    } else if (dice2 === 6) {
      setDiceTwo(die6);
    }
  }

  function handleNewGameButtonClicked() {
    setStartButtonClicked(false);
    setRollDiceButtonClicked(false);
  }
  function handleStartButtonClicked() {
    setStartButtonClicked(true);
  }

  function handleChange(event) {
    setTarget(event.target.value);
  }
  return (
    <>
      {!startButtonClicked && (
        <div class="setup-container">
          <div class="game-instructions">
            <h2>Game Instructions:</h2>
            <ul>
              <li>
                In your turn, roll the dice (at least once) and accumulate the
                result in "current".
              </li>
              <br />
              <li>
                You can roll again or click "Hold" to save the points from
                "current" and end the turn.
              </li>
              <br />
              <li>
                Note! If you get 6-6, you will lose all points from "current"
                and the turn will go to your opponent.
              </li>
              <br />
              <li>
                If you manage to reach exactly the target score, you win! If you
                pass it, you lose.
              </li>
            </ul>
          </div>
          <div class="target-score">
            <label for="target">Please select a target score:</label>
            <input
              onChange={handleChange}
              type="number"
              id="target"
              value={target}
              min="10"
              max="100"
            />
            <br />
            <button onClick={handleStartButtonClicked} id="start-game">
              Start Game
            </button>
          </div>
        </div>
      )}
      {startButtonClicked && (
        <div>
          <div>
            <button onClick={handleNewGameButtonClicked} id="new-game">
              New Game
            </button>
          </div>
          <div class="game">
            <div class="player" id="player1">
              <h3>Player 1</h3>
              <div class="score" id="score1">
                0
              </div>
              <div class="current">
                <p>Current</p>
                <div id="current1">0</div>
              </div>
            </div>
            <div class="dice-box">
              <>
                {rollDiceButtonClicked && (
                  <div class="dice">
                    <div class="die" id="die1">
                      <img src={diceOne} alt="die1" />
                    </div>
                    <div class="die" id="die2">
                      <img src={diceTwo} alt="die2" />
                    </div>
                  </div>
                )}
              </>
              <div class="controls">
                <button onClick={handleRollDiceButtonClicked} id="roll-dice">
                  Roll Dice
                </button>
                <button id="hold">Hold</button>
              </div>
            </div>
            <div class="player" id="player2">
              <h3>Player 2</h3>
              <div class="score" id="score2">
                0
              </div>
              <div class="current">
                <p>Current</p>
                <div id="current2">0</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dice;
