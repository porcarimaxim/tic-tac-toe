import React, { useState } from "react";
import Board from "./Board";
import Moves from './Moves'
import Status from './Status'
import { calculateWinner } from "./util"

export default () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    const historyToStep = history.slice(0, stepNumber + 1);
    const current = historyToStep[historyToStep.length - 1];

    let squares = [...current];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";


    setHistory([...historyToStep, squares]);
    setXIsNext(!xIsNext);
    setStepNumber(historyToStep.length);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
  }

  const current = history[stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <Status
          squares={current}
          xIsNext={xIsNext}
        />
        <Moves
          history={history}
          onClick={(move) => jumpTo(move)}
        />
      </div>
    </div>
  );
}