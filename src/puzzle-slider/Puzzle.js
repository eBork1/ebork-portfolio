import React from 'react';
import './Puzzle.css';

function Square(props) {
    return (
        props.value === 0 ?
            <button className="border" id="spSquare">
                *
                </button>
            :
            <button className="border" id="spSquare" onClick={props.onClick}>
                {props.position}
                {/* <img src="/dog.jpg" alt="dog"></img> */}
            </button>
    );
}

class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            currentBoard: [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            win: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            
        }
    }

    renderSquare(value) {
        return (
            <Square
                position={value}
                onClick={() => { this.handleClick(value) }}
            />
        )
    }

    shuffleBoard() {
        let startingBoard = this.state.currentBoard;
        if (this.state.winStatus === true){
            window.location.reload(true);
        }
        for (var i = startingBoard.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = startingBoard[i];
            startingBoard[i] = startingBoard[j];
            startingBoard[j] = temp;
        }
        console.log(startingBoard)
        this.setState({currentBoard: startingBoard});
    }

    handleClick(value) {
        let currentBoard = this.state.currentBoard;
        let indexOfClickedTile = currentBoard.indexOf(value);
        let indexOfBlankTile = currentBoard.indexOf(0);
        let conditions = [
            indexOfClickedTile - 1 === indexOfBlankTile ||
            indexOfClickedTile + 1 === indexOfBlankTile ||
            indexOfClickedTile - 4 === indexOfBlankTile ||
            indexOfClickedTile + 4 === indexOfBlankTile
        ]

        if (conditions.includes(false)) {
            return null;
        } else {
            //Swap the tiles in the array
            currentBoard[indexOfBlankTile] = currentBoard[indexOfClickedTile];
            currentBoard[indexOfClickedTile] = 0;
            //Update board
            this.setState({ currentBoard: currentBoard });
            // console.log(this.state.currentBoard);
            // console.log(this.state.win);
            this.checkWin();

        }
    }

    checkWin() {
        let win = JSON.stringify(this.state.win);
        let currentBoard = JSON.stringify(this.state.currentBoard);

        if (currentBoard === win) {
            this.setState({winStatus: true})
        }
    }

    componentDidMount(){
        this.shuffleBoard();
    }

    render() {
        let position = this.state.currentBoard;
        let winStatus = this.state.winStatus;
        return (
            <div className="container mt-5">
                {winStatus === true ? <p className="display-4 text-white">WINNER</p> : null}
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                        {this.renderSquare(position[0])}
                        {this.renderSquare(position[1])}
                        {this.renderSquare(position[2])}
                        {this.renderSquare(position[3])}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                        {this.renderSquare(position[4])}
                        {this.renderSquare(position[5])}
                        {this.renderSquare(position[6])}
                        {this.renderSquare(position[7])}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                        {this.renderSquare(position[8])}
                        {this.renderSquare(position[9])}
                        {this.renderSquare(position[10])}
                        {this.renderSquare(position[11])}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                        {this.renderSquare(position[12])}
                        {this.renderSquare(position[13])}
                        {this.renderSquare(position[14])}
                        {this.renderSquare(position[15])}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto">
                        <button onClick={() => { this.shuffleBoard() }}>
                            {winStatus === true ? "Restart" : "Shuffle"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Puzzle extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}