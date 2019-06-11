import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import FilmsContainer from './containers/FilmsContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import Navbar from './components/Navbar';

const App = () => {

  return(
    <div className="App">
      <div className="container">
        <Router>
          <Route>
            <Navbar />
          </Route>
          <Route exact path="/" component={Home}/>
          <Route exact path="/films" />
          <Route exact path="/favorites" />
        </Router>
      </div>
    </div>
  )
}

export default App;
