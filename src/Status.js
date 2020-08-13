import React from "react";
import {calculateWinner} from "./util"

export default (props) => {
    const winner = calculateWinner(props.squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (props.xIsNext ? "X" : "0");
    }

    return (
        <div>{status}</div>
    );
}