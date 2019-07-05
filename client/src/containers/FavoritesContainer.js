import React from 'react';
import Header from '../components/Header';
import Favorites from '../components/Favorites';

const FavoritesContainer = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Favorites />
      </div>
    </div>
  )
}

export default FavoritesContainer
