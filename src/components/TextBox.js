import React, { Component } from 'react';

class TextBox extends Component{

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {

    const { label, isSecure, name, placeholder, val, isEmail } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={isSecure ? "password" : isEmail ? "email" : "text"}
          className="form-control" value={val}
          id={name} name={name} placeholder={placeholder}
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default TextBox;
