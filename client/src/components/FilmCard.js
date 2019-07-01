import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = props => {
  return (
    <div className="filmCard">
      <Link key={props.film.id} to={`/films/${props.film.id}`} >
        <img alt="film poster" src={`https://image.tmdb.org/t/p/w200${props.film.poster_path}`} />
      </Link>
      <h4>{props.film.title}</h4>
      <p>Release Date: {props.film.release_date}</p>
    </div>
  )
}

export default FilmCard
