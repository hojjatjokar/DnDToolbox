import React from 'react';
import '../css/master.scss';

export default class Tool extends React.Component {
  /*
  *its better to gather all the states in just one component and implement other components stateless
  *i know that, but it got messy and very slow. so i prefer that go on this way
  */
  constructor(props) {
    super(props);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    /*
    *dragging state is there for determine if the element is currently dragging or not
    *rel state is there for determine how much the target element (drawing area) got offset from viewport edges
    *pos state is for determine actual
    */
    this.state = {pos: this.props.initialPos,
      dragging: false,
      rel: null
    };
  }
  mouseDownHandler(ev){
    var pos = {
        left:ev.target.offsetLeft,
        top:ev.target.offsetTop
    };
    this.setState({
      dragging: true,
      rel: {
        x: ev.pageX - pos.left,
        y: ev.pageY - pos.top
      }
    });
    ev.stopPropagation()
    ev.preventDefault()
  }
  mouseUpHandler(ev){
    if(this.state.dragging){
      this.setState({dragging: false});
    }
    ev.stopPropagation();
    ev.preventDefault();
  }
  mouseMoveHandler(ev){
    if (this.state.dragging && (ev.pageX - this.state.rel.x) > 0 && (ev.pageY - this.state.rel.y) >0 ){
      this.setState({
        pos: {
          x: ev.pageX - this.state.rel.x,
          y: ev.pageY - this.state.rel.y
        }
      });
    }
    ev.stopPropagation();
    ev.preventDefault();
  }
  render() {
    let src = "src/img/"+ this.props.title +".svg";
    let id = this.props.title + this.props.count ;
    return (
      <img src={src} id={id} style={{position: 'absolute',top: this.state.pos.y + 'px',left: this.state.pos.x + 'px'}}  onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler} onMouseMove={this.mouseMoveHandler}/>
    );
  }
}
Tool.defaultProps = { initialPos: {x: 0, y: 0} };
