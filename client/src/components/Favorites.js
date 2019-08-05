import React from 'react';
import { connect } from 'react-redux';
import { buildUser } from '../actions/userActions';
import { Link } from 'react-router-dom'

const Favorites = ({ activeUser, film}) => {
  console.log({activeUser})
    if (!activeUser) {
      return (
        <h3>Please <Link className="login-link" to="/login">Login</Link> to View Favorites</h3>
      )
    }
  return (
      <div>
        <h2>{activeUser.username}'s Profile</h2>
        <h4>{activeUser.bio}</h4>
        <div className="favorites">
          <h3>{activeUser.username}'s Favorite Films</h3>
          <ol>
          {activeUser.films.map(film =>
            <div key={film.id}>
              <li><Link className="link" to={`films/${film.id}`}><h4>{film.title}</h4></Link></li>
            </div>
            )}
          </ol>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.user.activeUser,
  }
}

export default connect(mapStateToProps, { buildUser} )(Favorites)
