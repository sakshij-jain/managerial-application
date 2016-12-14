import React, { Component } from 'react';

class EmployeeListItem extends Component {

  handleClick(evt) {
    this.props.handleClick(evt);
  }

  render() {
    const { username, email, id} = this.props.emp;

    return (
      <li className="list-group-item">
        <span id={id} onClick={this.handleClick.bind(this)}>{username}</span>
        <span className="badge" id={id}>Edit</span>
      </li>
    )
  }
}

export default EmployeeListItem;
