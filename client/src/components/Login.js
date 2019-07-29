import React, { Component } from 'react';
import { fetchUsers, buildUser } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = event => {
    this.props.buildUser(event.target.value)
  }

  render() {

    const mapUsers = this.props.allUsers.map((user, index) => {
      return (
        <option key={user.id} value={user.id} id={user.id}>
          {user.username}
        </option>
      )
    })

    const welcomeUser = () => {
      if (this.props.activeUser) {
        const username = this.props.activeUser.username
        return (
          <div>
            <h3>Welcome {username} to Reel 2 Real! The next app for film buffs.</h3>
            <h4>Access the films page to search for a variety of films and start building your list of favorites.</h4>
          </div>
        )
      }
    }

    return (
        <div className="usersDropdown">
          <h2>Login Page</h2>
          <select onChange={(event) => this.handleChange(event)}>
            <option>Select Your Username</option>
            {mapUsers}
          </select>
        <div>{welcomeUser()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.user.allUsers,
    activeUser: state.user.activeUser
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers, buildUser },
  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
