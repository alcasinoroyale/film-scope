import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';

const App = () => {

  return(
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Route>
            <Header />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
