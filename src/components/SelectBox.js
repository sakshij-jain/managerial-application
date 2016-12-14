import React, { Component } from 'react';

class SelectBox extends Component{

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {

    const { label, name } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select className="form-control" name={name} id={name} onChange={this.handleChange.bind(this)} >
          <option>India</option>
          <option>America</option>
          <option>Australia</option>
        </select>
      </div>
    )
  }
}

export default SelectBox;
