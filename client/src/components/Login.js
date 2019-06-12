import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name="username"
        placeholder="Enter username"
        type="text"
        value={username}
        onChange={this.handleChange}
        />
      </form>
    )
  }


}

export default Login
