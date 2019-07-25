import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
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
        <h3>Search For Your Favorite Films</h3>
        <Search handleSubmit={this.handleSubmit} />
        <Results films={this.props.films} />
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
