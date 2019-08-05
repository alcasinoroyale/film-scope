import React from 'react';
import FilmCard from '../components/FilmCard';

const Results = (props) => {
  return (
    <div>
      {props.films.slice(0,14).map((film, index) => {
        return (
            <FilmCard key={index} film={film} /> 
          )
        }
      )}
    </div>
  )
}

export default Results
