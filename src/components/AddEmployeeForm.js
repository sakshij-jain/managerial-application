import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import CheckBox from './CheckBox';
import TextBox from './TextBox';
import RadioBox from './RadioBox';
import SelectBox from './SelectBox';
import { handlePropChange, addNewEmployee } from '../actions';

class AddEmployeeForm extends Component{

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, propName) {
    this.props.handlePropChange(event.target.value, propName);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewEmployee(this.props);
  }

  render() {

    const { username, email, password, gender, ismanager, country } = this.props;
    console.log(this._reactInternalInstance._context.router.location.query.id);
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <button type="submit" className="btn btn-primary btn-lg pull-right"
              style={styles.buttonStyle} onClick={() => browserHistory.push('/emp')}>
              Employees List</button>
            <h3>New Employee Registration Form</h3>
          </div>
        </div>
        <h3></h3>
        <form onSubmit={this.handleSubmit}>
          <TextBox label="Name" placeholder="Please enter name" val={username}
            name="username" handleChange={this.handleChange} />
          <TextBox label="Email ID" isEmail placeholder="Please enter email id" val={email}
            name="email" handleChange={this.handleChange} />
          <TextBox label="Password" isSecure placeholder="Please enter password" val={password}
            name="password" handleChange={this.handleChange} />
          <RadioBox label="Female" name="gender" value="female" val={gender}
            handleChange={this.handleChange} />
          <RadioBox label="Male" name="gender" value="male" val={gender}
            handleChange={this.handleChange} />
          <br />
          <CheckBox label="Is Manager" name="ismanager" value="Y" val={ismanager}
            handleChange={this.handleChange} />
          <SelectBox label="Select Country" name="country" val={country}
            handleChange={this.handleChange} />
          <button type="submit" className="btn btn-primary">Add New Employee</button> &nbsp;
          </form>
        </div>
      )
    }
  }

  AddEmployeeForm.propTypes = {
    username: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired
  }

  const styles = {
    buttonStyle: {
      position: 'relative',
      bottom: -5
    }
  }

  const mapStateToProps = ({addEmployee}) => {

    const { username, email, password, gender, country, ismanager } = addEmployee;

    return {
      username, email, password, gender, country, ismanager
    }
  }

  export default connect(mapStateToProps, {
    handlePropChange,
    addNewEmployee
  })(AddEmployeeForm);
