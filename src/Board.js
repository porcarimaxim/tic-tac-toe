import React from "react";
import Square from './Square';

export default class Board extends React.Component {
  render() {
    const items = this.props.squares.map((value, index) => {
      return (
        <Square 
          key={index}
          value={this.props.squares[index]} 
          onClick={() => this.props.onClick(index)} 
          />
      );
    });
    
      return (
          <div className="board">
              {items}
          </div>
      );
  }
}