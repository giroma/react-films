import React, { Component } from 'react';
import Fave from './Fave';

class FilmRow extends Component {

  render() {
    return (
      <div className="film-row">
        <figure className="film-poster">
          <img src={'https://image.tmdb.org/t/p/w780/'+this.props.film.poster_path} alt="{film.title}" />
        </figure>

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;
