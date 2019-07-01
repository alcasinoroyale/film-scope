import React, { Component } from 'react';
import FilmCard from './FilmCard'

class FilmList extends Component {
  renderFilms() {
    return (
      <React.Fragment>
      {this.props.films.map((film, index) => {
        return (
          <FilmCard classes={this.props.classes} key={index} value={film} />
        )
      })}
      </React.Fragment>
    )
  }

  render() {
    return (
      <>
        {this.renderFilms}()}
      </>
    )
  }
}

export default FilmList
