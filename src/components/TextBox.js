import React, { Component } from 'react';

class TextBox extends Component{

  renderError() {
    this.props.error ? <span>{error}</span> : ""
  }

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {

    const { label, isSecure, name, placeholder, error, val } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={isSecure? "password" : "text"} className="form-control" value={val}
               id={name} name={name} placeholder={placeholder}
               onChange={this.handleChange.bind(this)} />
        <span>{error}</span>
      </div>
    )
  }
}

export default TextBox;
