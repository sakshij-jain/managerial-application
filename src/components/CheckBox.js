import React, { Component } from 'react';

class CheckBox extends Component{

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {

    const { label, name, value } = this.props;

    return (
      <div className="checkbox">
        <label><input type="checkbox" name={name} value={value} onChange={this.handleChange.bind(this)} />{label}</label>
      </div>
    )
  }
}

export default CheckBox;
