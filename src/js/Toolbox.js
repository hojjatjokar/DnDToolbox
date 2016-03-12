import React from 'react';
import '../css/master.scss';
import Button from './Button';
import Line from './Line';
import Clear from './Clear'
export default class Toolbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var className;
    if(this.props.drawLine){
      className = 'active';
    }else{
      className = '';
    }
    
    return (
      <div className='toolbox'>
        <h1>Tool Box </h1>
        <div className='listItem'>
            <div className='item'>
              <Button title="resistor" />
            </div>
            <div className='item'>
              <Button title='inductor' />
            </div>
        </div>
        <div className='listItem'>
          <div className={className + ' item'}>
            <Line drawLine={this.props.drawLine} clickHandle={this.props.clickHandle}/>
          </div>
          <div className='item'>
            <Clear clearClickHandle={this.props.clearClickHandle}/>
          </div>
        </div>

      </div>
    );
  }
}
