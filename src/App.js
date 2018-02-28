import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './components/FilmDetails';
import FilmList from './components/FilmList';
import TMDB from './TMDB';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: TMDB.films,
      faves: [],
      current: false
    }
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex === -1) {
      faves.push(film)
      this.setState({faves})
      console.log(`Adding ${film.title} to faves`);
    }
    else {
      faves.splice(filmIndex, 1) //remove 1 item starting at that index
      this.setState({faves})
      console.log(`Removing ${film.title} from faves`);
    }
  }
  render() {
    return (
      <div className="film-library">
        <FilmList     faves={this.state.faves}
                      films={this.state.films}
                      onFaveToggle={this.handleFaveToggle}/>

        <FilmDetails  films={TMDB.films}
                      film={this.state.current}/>
      </div>
    );
  }
}

export default App;
