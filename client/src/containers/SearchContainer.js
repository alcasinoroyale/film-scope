import React, { Component } from 'react';
import Search from '../components/Search';
import LoadFilm from '../components/LoadFilm';
import { searchFilm } from '../actions/filmActions'
import { connect } from 'react-redux';

class SearchContainer extends Component {

  handleSubmit = query => {
    searchFilm(query)(this.props.dispatch)
  }

  render() {
  return (
    <div>
      <div>
        <Search handleSubmit={this.handleSubmit} />
        <LoadFilm films={this.props.films} />
      </div>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    films: state.films.search.results
  }
}

export default connect(mapStateToProps)(SearchContainer)
