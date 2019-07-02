import React, { Component } from 'react';
import { fetchNowPlaying } from '../actions/filmActions'
import FilmCard from '../components/FilmCard'
import { connect } from 'react-redux';

class NowPlaying extends Component {

  componentDidMount() {
    fetchNowPlaying(this.props.currentPage)(this.props.dispatch)
  }

    render() {
    return (
      <div className="nowPlaying">
        <h1>Now Playing in Theatres</h1>
          {this.props.films.map((film, index) => {
            return (
              <FilmCard key={index} film={film} />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    films: state.films.nowPlaying.films,
    currentPage: state.films.currentPage,
    totalPages: state.films.totalPages
  }
}

export default connect(mapStateToProps)(NowPlaying)
