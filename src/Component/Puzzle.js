import React from 'react';
import shuffle from 'shuffle-array';
import Board from './Board';

export default class Puzzle extends React.Component {
  state = {
    board: [1, 2, 3, 4, 5, 6, 7, 0, 8],
    size: 3
  };
  newGame = size => {
    let board = new Array(size * size);
    for (let i = 0; i < size * size; i++) {
      board[i] = i;
    }
    board = shuffle(board);
    this.updateBoard(board);
    this.setState({ size: size });
  };
  updateBoard = board => {
    this.setState({ board: board });
  };

  render() {
    const { board, size } = this.state;
    return (
      <div className='puzzle'>
        <h1>React puzzle game</h1>
        {this.state && board ? (
          <Board size={size} board={board} updateBoard={this.updateBoard} />
        ) : null}
        <input
          type='submit'
          value='New 3x3 game'
          onClick={() => this.newGame(3)}
        />
        <input
          type='submit'
          value='New 4x4 game'
          onClick={() => this.newGame(4)}
        />
        <input
          type='submit'
          value='New 5x5 game'
          onClick={() => this.newGame(5)}
        />
        <input type='submit' value='Reset' onClick={() => this.newGame(size)} />
      </div>
    );
  }
}
