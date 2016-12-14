import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import EmployeeList from './EmployeeList';
import EmployeeModal from './EmployeeModal';
import { getEmployees, getEmployeeByID } from '../actions';

class EmployeeContainer extends Component {

  constructor(props) {
    super(props);
    this.state={
      showModal: false
    }
  }

  componentDidMount() {
    this.props.getEmployees();
  }

  handleClick(evt) {
    evt.preventDefault();
    var id = evt.target.attributes.id.value;
    this.props.getEmployeeByID(id);
    this.openModal();
  }

  openModal() {
    this.setState({showModal: true})
  }

  closeModal() {
    this.setState({showModal: false})
  }

  render() {

    var _renderModal = () => this.state.showModal ? <EmployeeModal showModal={this.state.showModal}
        closeModal={this.closeModal.bind(this)} employee={this.props.employee}/> : '';
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <button type="submit" className="btn btn-primary btn-lg pull-right"
              style={styles.buttonStyle} onClick={() => browserHistory.push('/addemp')}>
              Add New Employee</button>
            <h3>Employees List</h3>
          </div>
        </div>
        <EmployeeList employees={ this.props.employees }
          handleClick={this.handleClick.bind(this)} />
        {
          _renderModal()
        }
      </div>
    )
  }
}

const styles = {
  buttonStyle: {
    position: 'relative',
    bottom: -5
  }
}

const mapStateToProps = ({employeeReducer}) => {

  const { employees, employee } = employeeReducer;

  return {
    employees, employee
  }
}

export default connect(mapStateToProps, {
  getEmployees,
  getEmployeeByID
})(EmployeeContainer);
