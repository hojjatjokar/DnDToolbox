import React from 'react';
import '../css/master.scss';
import Toolbox from './Toolbox';
import CanvasFrame from './CanvasFrame';
import Tool from './Tool';
import Stroke from './Stroke'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles:[],
      strokes:[],
      drawLine: false,
    };
    this.canvasFramedropHandler = this.canvasFramedropHandler.bind(this);
    this.lineClickHandle = this.lineClickHandle.bind(this);
    this.strokeDrawMouseDownHandler = this.strokeDrawMouseDownHandler.bind(this);
    this.strokeDrawMouseUpHandler = this.strokeDrawMouseUpHandler.bind(this);
    this.clearClickHandle = this.clearClickHandle.bind(this);
    // temp variables for holding position of start of a line
    this.x1;
    this.y1;
    //temp variable for holding how much drawing got offset from viewport
    this.positionCanvas;
  }
  //drophandler for canvas elemen
  canvasFramedropHandler(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data == 'inductor' || data == 'resistor'){
      this.setState({
        titles: this.state.titles.concat(data)
      });
    }

  }
  //handle click for managing state for line component to determine can or cant draw in canvas element
  lineClickHandle(ev){
    ev.preventDefault()
    this.setState({
      drawLine: !this.state.drawLine
    });
  }
  /*
  * if drawing line is allowed then draw it
  * handle events for drawing stroke
  */
  strokeDrawMouseDownHandler(ev){
    this.positionCanvas = {
      left:ev.currentTarget.offsetLeft,
      top:ev.currentTarget.offsetTop
    }
    if(this.state.drawLine){
       this.x1 = ev.pageX - this.positionCanvas.left;
       this.y1 = ev.pageY - this.positionCanvas.top;
    }
  }
  strokeDrawMouseUpHandler(ev){
    if(this.state.drawLine){
      this.setState({
        strokes: this.state.strokes.concat({
          x1 : this.x1,
          y1: this.y1,
          x2: ev.pageX - this.positionCanvas.left,
          y2: ev.pageY - this.positionCanvas.top
        })
      });
    }
  }
  //end of handling events for stroke

  /*
  * handling click event for Cleare component for clearing the drawing area
  */
  clearClickHandle(ev){
    this.setState({
      titles:[],
      strokes:[],
      drawLine: false
    });
  }

  render() {
    /*
    *generating tools that have to drown in drawing area
    *sending title and a number to Tool component for generating uniqe id there
    */
    var countTool = 0 ;
    var tools = this.state.titles.map(title => {
      countTool++;
      return <Tool title={title} count={countTool} />
    });
    var strokes = this.state.strokes.map(stroke =>{
      return <Stroke strokeWidth="4" stroke="orange" x1={stroke.x1} x2={stroke.x2} y1={stroke.y1} y2={stroke.y2} />
    });
    return (
      <div className='app'>
        <Toolbox clearClickHandle={this.clearClickHandle} drawLine={this.state.drawLine} clickHandle={this.lineClickHandle}/>
        <CanvasFrame  tools={tools} strokes={strokes} dropHandler={this.canvasFramedropHandler}  strokeDrawMouseDownHandler={this.strokeDrawMouseDownHandler} strokeDrawMouseUpHandler={this.strokeDrawMouseUpHandler}/>
      </div>
    );
  }
}
