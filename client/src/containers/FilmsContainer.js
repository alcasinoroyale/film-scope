import React from 'react';
import Header from '../components/Header';
import AllFilms from '../components/AllFilms';

const FilmsContainer = () => {
  return (
    <div>

      <div>
        <Header />
      </div>

      <div>
        <h2>All Films Page</h2>
      </div>

      <div>
        <AllFilms />
      </div>

    </div>
  )
}

export default FilmsContainer
