import React from "react";
import Square from './Square';

export default (props) => {
    const items = props.squares.map((value, index) => <Square 
            key={index}
            value={props.squares[index]} 
            onClick={() => props.onClick(index)} 
          />
    );

    return (
        <div className="board">
            {items}
        </div>
    );
}