import React from 'react';
import '../css/master.scss';

export default class Stroke extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <line x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2}
                  strokeWidth={this.props.strokeWidth}
                  stroke={this.props.stroke}>
            </line>
        );
    }
}
