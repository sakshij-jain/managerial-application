import React, { Component } from 'react';

class SelectBox extends Component{

  render() {

    const { label, name, error } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select className="form-control" name={name} id={name}>
          <option>India</option>
          <option>America</option>
          <option>Australia</option>
        </select>
      </div>
    )
  }
}

export default SelectBox;
