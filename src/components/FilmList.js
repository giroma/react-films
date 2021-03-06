import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  constructor() {
    super()
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = (e, filter) => {
    this.setState({filter: filter})
    console.log( 'Setting filter to '+ filter);}

  render() {
    let films = this.props.films  //used later to populate FilmRow map
    if (this.state.filter === 'faves') {
      films = this.props.faves
    }
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${(this.state.filter === 'all') ? 'is-active':''}`} onClick={(e) => this.handleFilterClick(e,'all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${(this.state.filter === 'faves') ? 'is-active':''}`} onClick={(e) => this.handleFilterClick(e,'faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        { films.map(film =>
        <FilmRow  film={film}
                  key={film.id}
                  isFave={this.props.faves.includes(film)}
                  onFaveToggle={() => this.props.onFaveToggle(film)}
                  currentFilm={() => this.props.currentFilm(film)}/>
        )}
      </div>
    );
  }
}

export default FilmList;
