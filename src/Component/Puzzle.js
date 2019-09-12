import React from 'react';
import shuffle from 'shuffle-array';
import Board from './Board';

export default class Puzzle extends React.Component {
  state = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
    size: 3
  };

  newGame = size => {
    const board = (Array(size * size).fill(0)).map((item, index) =>  index);
    this.setState({ size, board: shuffle(board) });
  };
  
  updateBoard = board => 
    this.setState({ board });

  render() {
    const { board, size } = this.state;
    return (
      <div className='puzzle'>
        <h1>React Puzzle Game</h1>
        {(this.state && board )&& (
          <Board size={size} board={board} updateBoard={this.updateBoard} game={this.newGame}/>
        ) }
        {[3, 4, 5].map(item => 
        <input
        key={item}
        type='submit'
        value={`${item} * ${item} game`}
        onClick={() => this.newGame(item)}
      />
        )}
       
        <input type='submit' value='Reset' className="reset" onClick={() => this.newGame(size)} />
      </div>
    );
  }
}
