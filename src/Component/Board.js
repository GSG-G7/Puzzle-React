import React from 'react';
import Cell from './Cell';
import isArraySorted from 'is-array-sorted';

// eslint-disable-next-line react/prefer-stateless-function
export default class Board extends React.Component {
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

  // winGame = board => {
  //   const newArr=board.pop();
  //   if (isArraySorted(board)) {
  //     alert('You won!');
  //   }
  // };

  getCoordinates = (index, size) => {
    return { row: Math.floor(index / size) + 1, column: (index % size) + 1 };
  };
  getIndex = (row, col, size) => {
    return size * (row - 1) + col - 1;
  };
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
      possibleTop: possibleTop,
      possibleRight: possibleRight,
      possibleLeft: possibleLeft,
      possibleBottom: possibleBottom
    });
  };
  nextBoard = index => {
    const { board, updateBoard } = this.props;
    const { zero } = this.state;
    const newBoard = [...board];
    const temp = newBoard[index];
    newBoard[index] = newBoard[zero];
    newBoard[zero] = temp;
    updateBoard(newBoard);
    // this.winGame(newBoard);
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
    const { board, size } = this.props;
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
    return <div className='board'>{squares}</div>;
  }
}
