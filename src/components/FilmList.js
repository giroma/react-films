import React, { Component } from 'react';

class FilmList extends Component {

  render() {
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.films.map(film => film.title)}
      </div>
    );
  }
}

export default FilmList;
