import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
  if (this.props.activeUser) {
  return (
    <div className="active-user-box">
      <h3>You are logged in as {this.props.activeUser.username} ----
      <NavLink className="change-user" to="/login" exact> Change User</NavLink></h3>
    </div>
    )
  } else {
    return (
    <div className="footer">
      <NavLink to="/signup" exact>Sign Up</NavLink>or
      <NavLink to="/login" exact>Login</NavLink>
    </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.user.activeUser
  }
}

export default connect(mapStateToProps)(Footer)
