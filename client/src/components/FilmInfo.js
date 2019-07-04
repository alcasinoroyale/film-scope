import React, { Component } from 'react';
import { fetchFilm } from '../actions/filmActions'
import LoadFilm from '../components/LoadFilm'
import { connect } from 'react-redux';

class FilmInfo extends Component {

  componentDidMount() {
    fetchFilm(this.props.match.params.id)(this.props.dispatch);
  }

  render() {
    return (
      <div className="filmInfo">
        <LoadFilm film={this.props.film} />
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.tagline}</p>
          <p>Release Date: {this.props.film.release_date}</p>
          <p>Runtime: {this.props.film.runtime} Minutes</p>
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
