import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Signup />
        <Login />
      </div>
    </div>
  )
}

export default Home
