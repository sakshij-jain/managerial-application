import React, { Component } from 'react';

import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

  render() {

    var _renderList = () => this.props.employees.map((emp, index) =>
        <EmployeeListItem emp={emp} key={index}
          handleClick={this.props.handleClick.bind(this)} />);

    return (
      <div>
        <ul className="list-group">
          {
            _renderList()
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;
