import React, { Component } from 'react';

class Fave extends Component {
  constructor() {
    super()
    this.state = {
      isFave: false
    }
  }
  handleClick = (e) => {
    e.stopPropagation()
    this.setState({isFave: !this.state.isFave})
    console.log("handling Fave click!")}

  render() {
    const queue = this.state.isFave ? 'remove_from_queue':'add_to_queue'
    return (
      <div className={`film-row-fave ${queue}`}>
        <i className="material-icons" onClick={this.handleClick}>add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
