import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Board extends React.Component {
  state = {
    zero: 0,
    possibleTop: null,
    possibleRight: 1,
    possibleLeft: null,
    possibleBottom: 3
  };
  componentDidMount() {
    const { board, size } = this.props;
    this.findPossibles(board, size);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { board, size } = this.props;
      this.findPossibles(board, size);
    }
  }
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
        ? getIndex(zeroCoordinates.row + 1, zeroCoordinates.column, size)
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
    return <div>{this.nextBoard(2)}</div>;
  }
}
