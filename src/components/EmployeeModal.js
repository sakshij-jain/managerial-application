import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class EmployeeModal extends Component {

  render() {
    const { username, email, gender, country} = this.props.employee;

    return (
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <ul className="list-group" style={dialogStyle()}>
          <li className="list-group-item">User Name : {username}</li>
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">Country : {country}</li>
          <li className="list-group-item">Gender : {gender}</li>
        </ul>
      </Modal>
    )
  }
}

let rand = ()=> (Math.floor(Math.random() * 20) - 10);

const dialogStyle = function() {
  let top = 50 + rand();
  let left = 50 + rand();

  return {
    position: 'absolute',
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20,
    marginTop: 40 + '%'
  };
};

export default EmployeeModal;
