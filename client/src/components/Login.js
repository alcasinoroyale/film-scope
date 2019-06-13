import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log("Logging In")
    console.log(this.state);
    debugger
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Username
        <input type="text" name="username" placeholder="Enter username" value={username}
        onChange={this.handleChange}
        />
        Password
        <input type="password" name="password" placeholder="Enter password" value={password}
        onChange={this.handleChange}
        />
        <button type="submit" value="Login">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers, }, dispatch)


export default connect(null, mapDispatchToProps)(Login)
