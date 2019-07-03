import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log(this.state)
    alert('A new user was created: ' + this.state.username);
    event.preventDefault()
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <label>Username</label>
        <div className="control">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={this.handleChange}
            />
        </div>

        <label>Email</label>
        <div className="control">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <label>Password</label>
        <div className="control">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <div className="submit">
          <button type="submit" value="signup">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default (Signup)
