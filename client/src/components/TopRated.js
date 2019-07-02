import React, { Component } from 'react';
import { fetchTopRated } from '../actions/filmActions'
import { connect } from 'react-redux';

class TopRated extends Component {

  componentDidMount() {
    fetchTopRated(this.props.currentPage)(this.props.dispatch)
  }

  render() {
    return (
      <>
      <div className="filmsList">
        <h1>Top Rated Films</h1>
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

export default connect(mapStateToProps)(TopRated)
