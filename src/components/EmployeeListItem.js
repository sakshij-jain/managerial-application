import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EmployeeListItem extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handle = this.handle.bind(this);
  }

  handleClick(evt) {
    this.props.handleClick(evt);
  }

  handle(evt) {
    browserHistory.push({pathname: '/addemp',query: { id: evt.target.id }});
  }

  render() {
    const { username, email, id} = this.props.emp;

    return (
      <li className="list-group-item">
        <span className="showModal" id={id} onClick={this.handleClick}>{username}</span>
        <span className="badge" id={id} onClick={this.handle}>Edit</span>
      </li>
    )
  }
}

export default EmployeeListItem;
