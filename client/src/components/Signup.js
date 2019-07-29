import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      bio: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    const { username, email, bio, password } = this.state
    axios.post('api/users', {
      user: {
        username: username,
        email: email,
        bio: bio,
        password: password
      }
    },
      { withCredentials: true }
    )
      .then(response => {
        console.log('signup res', response)
        window.alert('Your account has been successfully created!')
        window.location.href = '/login'
      })
      .catch(error => {
        console.log("signup error", error)
        window.alert('There was trouble creating your account.')
    });
  }

  render() {
    const { username, email, bio, password } = this.state;
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
            required
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
            required
          />
        </div>

        <label>Bio</label>
        <div className="control">
          <input
            type="text"
            name="bio"
            placeholder="Enter bio"
            value={bio}
            onChange={this.handleChange}
            required
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
            required
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
