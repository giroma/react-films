import React, { Component } from 'react';

class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    this.props.onFaveToggle()
    console.log("handling Fave click!")}

  render() {
    const queue = this.props.isFave ? 'remove_from_queue':'add_to_queue'
    return (
      <div className={`film-row-fave ${queue}`}>
        <i className="material-icons" onClick={this.handleClick}>add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
