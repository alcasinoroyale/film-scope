import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    console.log(this.state)
    event.preventDefault();
  }

  render() {

    console.log(this.props.fetchUsers)

    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>

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
          <button type="submit" value="Login">Login</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers, },
  dispatch)

export default connect(null, mapDispatchToProps)(Login)
