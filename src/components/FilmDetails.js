import React, { Component } from 'react';

class FilmDetails extends Component {

  render() {
    return (
      <div className="film-details">
        {console.log(this.props.current.title)}
        <h1 className="section-title">DETAILS</h1>
      </div>
    );
  }
}

export default FilmDetails;
