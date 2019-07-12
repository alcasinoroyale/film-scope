import React, { Component } from 'react';
import { addToFavorites } from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddFavorites extends Component {
  render() {
    return (
      <div>
      <button className="favorite_films" onClick={() => this.props.addToFavorites(this.props.film, this.props.activeUser)}>Add To Favorites</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.user.activeUser,
    film: state.films.film.filmInfo
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addToFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorites)
