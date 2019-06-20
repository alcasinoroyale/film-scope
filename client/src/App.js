import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import FilmsContainer from './containers/FilmsContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import Navbar from './components/Navbar';
import Signup from './components/Signup'
import Login from './components/Login'
const App = () => {

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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    </div>
  )
}
export default App;
