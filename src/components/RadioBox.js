import React, { Component } from 'react';

class RadioBox extends Component{

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {

    const { label, name, value } = this.props;

    return (
      <div className="radio-inline">
        <label><input type="radio" name={name} value={value}
          onChange={this.handleChange.bind(this)}/>{label}</label>
      </div>
    )
  }
}

export default RadioBox;
