import React, { Component } from 'react';

class FilmList extends Component {

  render() {
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.films.map(film =>
          <div className="film-row" key={film.id}>
            <figure className="film-poster">
              <img src={'https://image.tmdb.org/t/p/w780/'+film.poster_path} alt="{film.title}" />
            </figure>

          <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{film.release_date}</p>
          </div>
        </div> )}
      </div>
    );
  }
}

export default FilmList;
