import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home'

const App = () => {

  return(
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Route>
          </Route>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
