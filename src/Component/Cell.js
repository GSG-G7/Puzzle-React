import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Cell extends React.Component {
  render() {
    const { value, clickHandler } = this.props;
    const cel = value === 0 ? 'zero square' : 'square';
    return (
      <span className={cel} onClick={() => clickHandler()}>
        {value}
      </span>
    );
  }
}
