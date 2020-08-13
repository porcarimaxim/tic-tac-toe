import React from "react";
import {calculateWinner} from "./util"

export default class Status extends React.Component {
    render() {
        const winner = calculateWinner(this.props.squares);
        let status;

        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.props.xIsNext ? "X" : "0");
        }

        return (
            <div>{status}</div>
        );
    }
}