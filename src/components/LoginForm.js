import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import TextBox from './TextBox';
import { handlePropChange, loginUser } from '../actions';

class LoginForm extends Component {

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
    this.props.loginUser(this.props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h3>Login Form</h3>
          </div>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextBox label="User ID" isEmail placeholder="Please enter email id" val={this.props.email}
                   name="email" error="is required" handleChange={this.handleChange} />
          <TextBox label="Password" isSecure placeholder="Please enter password" val={this.props.password}
                  name="password" error="is required" handleChange={this.handleChange} />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired
}

const mapStateToProps = ({login}) => {

  const { email, password } = login;

  return {
    email, password
  }
}

export default connect(mapStateToProps, {
  handlePropChange,
  loginUser
})(LoginForm);
