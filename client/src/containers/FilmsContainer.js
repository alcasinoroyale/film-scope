import React from 'react';
import Header from '../components/Header';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';

const FilmsContainer = () => {
  return (
    <div>

      <div>
        <Header />
      </div>

      <div>
        <TopRated />
      </div>

      <div>
        <NowPlaying />
      </div>
      
    </div>
  )
}

export default FilmsContainer
