import React, { Component } from 'react';

class FilmDetails extends Component {

  render() {
    return (
      <div className="film-details">
        {console.log(this.props.film.title)}
        <h1 className="section-title">DETAILS</h1>
        <div className="film-detail">
          <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FilmDetails;
