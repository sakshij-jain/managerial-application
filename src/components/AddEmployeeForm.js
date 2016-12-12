import React, { Component } from 'react';

import TextBox from './TextBox';
import RadioBox from './RadioBox';
import SelectBox from './SelectBox';

import { handlePropChange, addNewEmployee } from '../actions';
import { connect } from 'react-redux';

class AddEmployeeForm extends Component{

  constructor() {
    super()
  }

  handleChange(event, propName) {
    this.props.handlePropChange(event.target.value, propName);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewEmployee(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextBox label="Name" placeholder="Please enter name" val={this.props.username}
                   name="username" error="is required" handleChange={this.handleChange.bind(this)} />
                 <TextBox label="Email ID" placeholder="Please enter email id" val={this.props.email}
                   name="email" error="is required" handleChange={this.handleChange.bind(this)} />
          <TextBox label="Password" isSecure placeholder="Please enter password" val={this.props.password}
             name="password" error="is required" handleChange={this.handleChange.bind(this)} />
          <RadioBox type="radio" label="Female" name="gender" value="female" val={this.props.gender}
              error="is required" handleChange={this.handleChange.bind(this)} />
          <RadioBox type="radio" label="Male" name="gender" value="male" val={this.props.gender}
              error="is required" handleChange={this.handleChange.bind(this)} />
          <SelectBox label="Select Country" name="country" val={this.props.country}
                     error="is required" handleChange={this.handleChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Add New Employee</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({addEmployee}) => {

  const { username, email, password, gender, country } = addEmployee;

  return {
    username, email, password, gender, country
  }
}

export default connect(mapStateToProps, {
  handlePropChange,
  addNewEmployee
})(AddEmployeeForm);
