import React from 'react';
import '../css/master.scss';

export default class CanvasFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    dragOverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    render() {
        return (
            <div id='canvas' className='canvas'
                 onDrop={this.props.dropHandler}
                 onDragOver={this.dragOverHandler}
                 onMouseDown={this.props.strokeDrawMouseDownHandler}
                 onMouseUp={this.props.strokeDrawMouseUpHandler}>
                {this.props.tools}
                <svg >
                    {this.props.strokes}
                </svg>
            </div>
        );
    }
}
