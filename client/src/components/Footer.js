import React from 'react';
import { NavLink } from 'react-router-dom';
import { buildUser } from '../actions/userActions';
import { connect } from 'react-redux'

const Footer = ({ activeUser }) => {
  console.log({activeUser})
  if (!activeUser) {
    return (
      <div className="footer">
        <NavLink to="/signup" exact>Sign Up</NavLink>or
        <NavLink to="/login" exact>Login</NavLink>
      </div>
    )
  }
  return (
    <div className="active-user-box">
      <h3>You are logged in as {activeUser.username} ----
      <NavLink className="change-user" to="/login" exact> Change User</NavLink></h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    activeUser: state.user.activeUser
  }
}

export default connect(mapStateToProps, {buildUser})(Footer)
