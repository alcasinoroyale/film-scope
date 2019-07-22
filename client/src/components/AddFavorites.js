import React, { Component } from 'react';
import { addToFavorites, removeFromFavorites } from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddFavorites extends Component {
  render() {
    if (this.props.activeUser) {
    return (
      <div>
        <button className="favorite_films" onClick={() => this.props.addToFavorites(this.props.film, this.props.activeUser)}>Add To Favorites</button>
        <button className="favorite_films" onClick={() => this.props.removeFromFavorites(this.props.film, this.props.activeUser)}>Remove From Favorites</button>
      </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.user.activeUser,
    film: state.films.film.filmInfo
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addToFavorites, removeFromFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorites)
