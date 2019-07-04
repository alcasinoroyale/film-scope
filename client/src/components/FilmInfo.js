import React, { Component } from 'react';
import { fetchFilm } from '../actions/filmActions'
import { connect } from 'react-redux';

class FilmInfo extends Component {

  componentDidMount() {
    fetchFilm(this.props.match.params.id)(this.props.dispatch);
  }

  render() {
    return (
      <div className="filmInfo">
        <h2>Film Title:</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    film: state.films.film.filmInfo,
    genres: state.films.film.genres,
    credits: state.films.film.credits
  }
}

export default connect(mapStateToProps)(FilmInfo)
