import React from 'react';
import Header from '../components/Header';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';
import { Link } from 'react-router-dom'

const FilmsContainer = () => {
  return (
    <div>

      <div>
        <Header />
      </div>

      <div>
        <Link className="search-link" to="/search">Search For More</Link>
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
