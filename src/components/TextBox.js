import React, { Component } from 'react';

class TextBox extends Component{

  renderError() {
    this.props.error ? <span>{error}</span> : ""
  }

  render() {

    const { label, type, name, placeholder, error } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} className="form-control"
               id={name} name={name} placeholder={placeholder} onChange={this.props.handleChange.bind(this)}  />
        <span>{error}</span>
      </div>
    )
  }
}

export default TextBox;
