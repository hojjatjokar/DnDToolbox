import React from 'react';
import '../css/master.scss';

export default class Clear extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.clearClickHandle}>Clear Canvas</button>
    );
  }
}
