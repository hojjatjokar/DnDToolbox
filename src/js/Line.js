import React from 'react';
import '../css/master.scss';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.clickHandle}>Draw Line</button>
    );
  }
}
