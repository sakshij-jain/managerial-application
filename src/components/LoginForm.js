import React, { Component } from 'react';

import TextBox from './TextBox';

import { handlePropChange, userAuthenticate } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

  constructor() {
    super()
  }

  handleChange(event, propName) {
    this.props.handlePropChange(event.target.value, propName);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.userAuthenticate(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextBox label="User ID" placeholder="Please enter email id"
                   name="email" error="is required" handleChange={this.handleChange.bind(this)} />
          <TextBox label="Password" isSecure placeholder="Please enter password"
                  name="password" error="is required" handleChange={this.handleChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({userAuthenticate}) => {

  const { email, password } = userAuthenticate;

  return {
    email, password
  }
}

export default connect(mapStateToProps, {
  handlePropChange,
  userAuthenticate
})(LoginForm);
