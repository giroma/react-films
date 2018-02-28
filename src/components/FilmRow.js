import React, { Component } from 'react';
import Fave from './Fave';
import TMDB from '../TMDB';

class FilmRow extends Component {
  handleDetailsClick = (e) => {
    this.props.currentFilm()
    console.log('Fetching details for ' + this.props.film.title)
  }

  render() {
    return (
      <div className="film-row" onClick={this.handleDetailsClick}>
        <figure className="film-poster">
          <img src={'https://image.tmdb.org/t/p/w780/'+this.props.film.poster_path} alt="{film.title}" />
        </figure>

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
        <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle}/>
      </div>
    );
  }
}

export default FilmRow;
