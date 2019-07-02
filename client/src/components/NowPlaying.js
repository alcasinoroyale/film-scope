import React, { Component } from 'react';
import { fetchNowPlaying } from '../actions/filmActions'
import { connect } from 'react-redux';

class NowPlaying extends Component {

  componentDidMount() {
    fetchNowPlaying(this.props.currentPage)(this.props.dispatch)
  }

  render() {
    return (
      <>
      <div className="filmsList">
        <h1>Now Playing in Theatres</h1>
        <div className="filmContent">
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    films: state.films.allFilms,
    currentPage: state.films.currentPage,
    totalPages: state.films.totalPages
  }
}

export default connect(mapStateToProps)(NowPlaying)
