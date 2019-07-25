import React, { Component } from 'react';
import FilmCard from '../components/FilmCard';

class Results extends Component {
  render() {
    return (
      <div>
      {this.props.films.slice(0,14).map((film, index) => {
        return (
          <FilmCard key={index} film={film} />
        )
      })}
      </div>
    )
  }
}

export default Results
