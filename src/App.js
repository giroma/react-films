import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './components/FilmDetails';
import FilmList from './components/FilmList';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList/>

        <FilmDetails/>
      </div>
    );
  }
}

export default App;
