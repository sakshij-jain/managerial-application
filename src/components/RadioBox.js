import React, { Component } from 'react';

class RadioBox extends Component{
  render() {

    const { label, type, name, error } = this.props;

    return (
      <div className="radio-inline">
        <label><input type={type} name={name} />{label}</label>
      </div>
    )
  }
}

export default RadioBox;
