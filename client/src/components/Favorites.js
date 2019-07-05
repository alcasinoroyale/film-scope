import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Favorites extends Component {
  render() {
    if (this.props.activeUser) {
      return (
      <div>
        <h2>{this.props.activeUser.username}'s Profile</h2>
          <h4>{this.props.activeUser.bio}</h4>
        <div className="favorites">
          <h3>Your Favorite Films</h3>
        </div>

      </div>
      )
    } else {
      return (
        <h4>Please <Link to="/login">Login</Link> to View Favorites</h4>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.user.activeUser
  }
}

export default connect(mapStateToProps)(Favorites)
