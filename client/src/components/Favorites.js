import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Favorites extends Component {
  render() {
    console.log(this.props.activeUser)
    if (this.props.activeUser) {
      return (
      <div>
        <h2>{this.props.activeUser.username}'s Profile</h2>
          <h4>{this.props.activeUser.bio}</h4>
        <div className="favorites">
          <h3>Your Favorite Films</h3>
          <ol>
          {this.props.activeUser.films.map((film, index) =>
                <div key={film.id}>
                <li><h4>{film.title}</h4></li>
                </div>
              )}
          </ol>
        </div>

      </div>
      )
    } else {
      return (
        <h3>Please <Link className="login-link" to="/login">Login</Link> to View Favorites</h3>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.user.activeUser,
    film: state.films.film.filmInfo
  }
}

export default connect(mapStateToProps)(Favorites)
