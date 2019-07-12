import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="taglines">
        <h2>Explore The Film Collection</h2>
        <h2>Create Your List of Favorites</h2>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
