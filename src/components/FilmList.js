import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {

  render() {
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.films.map(film =>
        <FilmRow film={film}/> )}
      </div>
    );
  }
}

export default FilmList;
