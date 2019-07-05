import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Favorites extends Component {
  render() {
    if (this.props.activeUser) {
      return (
      <div>
        {this.props.activeUser.username}
        <div className="favorites">
          <h2>Your Favorite Films</h2>
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
