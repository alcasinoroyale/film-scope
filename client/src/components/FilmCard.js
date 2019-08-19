import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = props => {
  if (props.film.poster_path === null) {
    return (
      <div className="filmCard">
        <Link key={props.film.id} to={`/films/${props.film.id}`} >
          <img alt={props.film.title} src="https://critics.io/img/movies/poster-placeholder.png" />
          <div className="unavailable">
            <h3>{props.film.title}</h3>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <div className="filmCard">
      <Link key={props.film.id} to={`/films/${props.film.id}`} >
        <img alt={props.film.title} src={`https://image.tmdb.org/t/p/w154${props.film.poster_path}`} />
      </Link>
    </div>
  )
}

export default FilmCard
