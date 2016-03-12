import React from 'react';
import '../css/master.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  dragStartHandler(ev){
    ev.dataTransfer.dropEffect = "copy"
    ev.dataTransfer.setData("text", ev.target.id);
  }
  render() {
    let src = "src/img/"+ this.props.title +".svg";
    return (
      <img src={src} id={this.props.title} draggable="true" onDragStart={this.dragStartHandler} />
    );
  }
}
