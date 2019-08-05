import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import FilmsContainer from './containers/FilmsContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import SearchContainer from './containers/SearchContainer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import FilmInfo from './components/FilmInfo';
import Login from './components/Login';

const App = () => {
const API_KEY = process.env.REACT_APP_FILM_API_KEY;
console.log(API_KEY)

  return(
    <div className="App">
      <div className="container">
        <Router>
          <Route>
            <Navbar />
          </Route>
          <Route exact path="/" component={Home}/>
          <Route exact path="/films" component={FilmsContainer}/>
          <Route exact path="/favorites" component={FavoritesContainer} />
          <Route exact path="/search" component={SearchContainer}/>
          <Route exact path="/films/:id" render={props => <FilmInfo {...props} key={props.match.params.id} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    </div>
  )
}
export default App;
