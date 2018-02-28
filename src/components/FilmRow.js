import React, { Component } from 'react';
import Fave from './Fave';

class FilmRow extends Component {
  handleDetailsClick = (e) => {
    this.props.currentFilm()
    console.log('Fetching details for ' + this.props.film.title)
    // const url = `https://api.themoviedb.org/3/movie/${this.props.film.id}?api_key=${this.props.TMDB.api_key}&append_to_response=videos,images&language=en`
    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     console.log(data) // take a look at what we get back!
    //   })
    // })
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
