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
          <h3>{this.props.film.tagline}</h3>
          <img src={`https://image.tmdb.org/t/p/w342${this.props.film.poster_path}`} alt="poster" />
          <div className="moreInfo">
          <h3>Details</h3>
          <p>Release Date: {this.props.film.release_date}</p>
          <p>Runtime: {this.props.film.runtime} Minutes</p>
          <p>Genres: {this.props.genres.map((genre, index) => {
            return genre.name
          }).join(", ")}</p>
          <h3>Synopsis</h3>
          <p>{this.props.film.overview}</p>
          <h3>Cast</h3>
          <p>{this.props.credits.cast.slice(0, 20).map((cast, index) => {
            return `${cast.name} as ${cast.character}`
          }).join(" * ")}</p>
        </div>
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
