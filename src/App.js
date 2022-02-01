import "./App.css";
import react, { useState } from "react";
import Dice from "./Dice";
import { Shake } from "reshake";
function App() {
  const [diceOne, setDiceOne] = useState("six");
  const [diceTwo, setDiceTwo] = useState("six");
  const [DoShake, setDoShake] = useState(false);

  const [TotalScore, setTotalScore] = useState("12");
  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array[0];
  }
  function roll() {
    const array = ["one", "two", "three", "four", "five", "six"];
    let scoreOne = shuffleArray(array);
    let scoreTwo = shuffleArray(array);

    let ScoreInNumberOne = null;

    switch (scoreOne) {
      case "one":
        ScoreInNumberOne = 1;
        break;
      case "two":
        ScoreInNumberOne = 2;
        break;
      case "three":
        ScoreInNumberOne = 3;
        break;
      case "four":
        ScoreInNumberOne = 4;
        break;
      case "five":
        ScoreInNumberOne = 5;
        break;
      case "six":
        ScoreInNumberOne = 6;
        break;
    }

    let ScoreInNumberTwo = null;
    switch (scoreTwo) {
      case "one":
        ScoreInNumberTwo = 1;
        break;
      case "two":
        ScoreInNumberTwo = 2;
        break;
      case "three":
        ScoreInNumberTwo = 3;
        break;
      case "four":
        ScoreInNumberTwo = 4;
        break;
      case "five":
        ScoreInNumberTwo = 5;
        break;
      case "six":
        ScoreInNumberTwo = 6;
        break;
    }

    setDoShake(false);

    setTotalScore(ScoreInNumberOne + ScoreInNumberTwo);

    setDiceOne(scoreOne);
    setDiceTwo(scoreTwo);
  }

  function StartRoll() {
    setDoShake(true);
    setTimeout(roll, 1000);
  }

  return (
    <div className="App">
      <div className="mainContent">
        <div className="dic-wrapper">
          {DoShake ? (
            <Shake
              h={16}
              v={0}
              r={3}
              dur={1000}
              int={10}
              max={100}
              fixed={true}
              fixedStop={true}
              freez={false}
            >
              {<Dice number={diceOne} />}
              {<Dice number={diceTwo} />}
            </Shake>
          ) : (
            <>
              <Dice number={diceOne} />
              <Dice number={diceTwo} />
            </>
          )}
        </div>
        <h2>Your Scoor is:{TotalScore}</h2>
        <div className="BtnHolder">
          <button onClick={StartRoll}>Shake</button>
        </div>
      </div>
    </div>
  );
}

export default App;
