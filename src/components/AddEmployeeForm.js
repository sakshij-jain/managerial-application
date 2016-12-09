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

  handleChange(event) {
    console.log(event.target.value);
    this.props.handlePropChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewEmployee(this.props);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextBox label="Name" type="text" placeholder="Please enter name"
                   name="name" error="is required" handleChange={this.handleChange}/>
          <TextBox label="Email ID" type="text" placeholder="Please enter email id"
                   name="email" error="is required" />
          <TextBox label="Password" type="password" placeholder="Please enter password"
                   name="password" error="is required" onChange={this.handleChange.bind(this)} />
          <RadioBox type="radio" label="Female" name="gender"
                    error="is required" onChange={this.handleChange.bind(this)} />
          <RadioBox type="radio" label="Male" name="gender"
                    error="is required" onChange={this.handleChange.bind(this)} />
          <SelectBox label="Select Country" name="country"
                     error="is required" onChange={this.handleChange.bind(this)} />
                   <button type="submit" className="btn btn-primary">Add New Employee</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({addEmployee}) => {

  const { name, email, password, gender, country } = addEmployee;

  return {
    name, email, password, gender, country
  }
}

export default connect(mapStateToProps, {
  handlePropChange,
  addNewEmployee
})(AddEmployeeForm);
