import React from "react";
import Board from "./Board";
import Moves from './Moves'
import Status from './Status'
import {calculateWinner} from "./util"

export default class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          history: [Array(9).fill(null)],
          xIsNext: true,
          stepNumber: 0,
      };
  }

  handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];

      let squares = [...current];

      if (calculateWinner(squares) || squares[i]) {
          return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";

      this.setState({
          history: [...history, squares],
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
      });
  }

  jumpTo(step) {
      this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
      });
  }

  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];

      return (
          <div className="game">
              <div className="game-board">
                  <Board
                      squares={current}
                      onClick={(i) => this.handleClick(i)}
                  />
              </div>
              <div className="game-info">
                  <Status 
                    squares={current} 
                    xIsNext={this.state.xIsNext}
                  />
                  <Moves 
                    history={history}
                    onClick={(move) => this.jumpTo(move)}
                  />
              </div>
          </div>
      );
  }
}