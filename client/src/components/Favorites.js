import React, { Component } from 'react';

class Favorites extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="favorites">
          <h2>Your Favorite Films</h2>
        </div>
      </div>
    )
  }
}

export default Favorites
