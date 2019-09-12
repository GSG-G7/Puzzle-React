import React from 'react';
import Cell from './Cell';
import isArraySorted from 'is-array-sorted';

// eslint-disable-next-line react/prefer-stateless-function
export default class Board extends React.Component {
  state = {
    win: false
  }
  componentDidMount() {
    const { board, size } = this.props;
    this.findPossibles(board, size);
  }
  componentDidUpdate() {
    const { board, size } = this.props;
    this.findPossibles(board, size);
  }
  shouldComponentUpdate(nextProps) {
    const { board } = this.props;
    const curr = board.join('');
    const next = nextProps.board.join('');
    return curr !== next;
  }

  winGame = board => {
    let board2 = [...board];
    board2.pop();
    if (isArraySorted(board2)) {
      this.setState({win: true});
    }
  };

  getCoordinates = (index, size) => ({ row: Math.floor(index / size) + 1, column: (index % size) + 1 });
 
  getIndex = (row, col, size) => (size * (row - 1) + col - 1);

  findPossibles = (board, size) => {
    const zeroIndex = board.indexOf(0);
    const zeroCoordinates = this.getCoordinates(zeroIndex, size);
    const possibleTop =
    zeroCoordinates.row > 0
    ? this.getIndex(zeroCoordinates.row - 1, zeroCoordinates.column, size)
    : null;
    const possibleRight =
    zeroCoordinates.column < size
    ? this.getIndex(zeroCoordinates.row, zeroCoordinates.column + 1, size)
        : null;
        const possibleLeft =
      zeroCoordinates.column > 0
      ? this.getIndex(zeroCoordinates.row, zeroCoordinates.column - 1, size)
      : null;
      const possibleBottom =
      zeroCoordinates.row < size
      ? this.getIndex(zeroCoordinates.row + 1, zeroCoordinates.column, size)
      : null;
      
    this.setState({
      zero: zeroIndex,
      possibleTop,
      possibleRight,
      possibleLeft,
      possibleBottom
    });
  };
  nextBoard = index => {
    const { board, size, updateBoard } = this.props;
    const { zero } = this.state;
    const newBoard = [...board];
    const temp = newBoard[index];
    newBoard[index] = newBoard[zero];
    newBoard[zero] = temp;
    updateBoard(newBoard);
    if (newBoard.indexOf(0) === size * size - 1) {
      this.winGame(newBoard);
    }
  };
  
  clickHandler = index => {
    const {
      possibleTop,
      possibleRight,
      possibleLeft,
      possibleBottom
    } = this.state;
    
    if (
      index === possibleTop ||
      index === possibleBottom ||
      index === possibleLeft ||
      index === possibleRight
      ) {
        this.nextBoard(index);
      }
    };
    render() {
    let { board, size , game} = this.props;
    const squares = board.map((val, index) => {
      if ((index + 1) % size === 0) {
        return (
          <span key={index}>
            <Cell
              value={val}
              clickHandler={this.clickHandler.bind(this, index)}
              />
            <br />
          </span>
        );
      }
      return (
        <span key={index}>
          <Cell
            value={val}
            clickHandler={this.clickHandler.bind(this, index)}
            />
        </span>
      );
    });
    const isWin = 
        this.state.win
        && 
        <div id="popup" className="overlay">
          <div className="popup">
            <h2>You Won Game</h2>
            <a className="close">&times;</a>
            <div className="content">
              <input type="submit" value= "Next Level" onClick={(e) => {
                game(++size);
                this.state.win = false;
              }
            } />
            </div>
          </div>
        </div>
        ;

      return (
        <div>
          <div className='board'>{squares}</div>
          <div>{isWin}</div>
        </div>
        
      );
    }
  }
