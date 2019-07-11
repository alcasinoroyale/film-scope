import React, { Component } from 'react';

class AddFavorites extends Component {
  render() {
    console.log(this.props.film)
    return (
      <div>
      <button className="favorite_films">Add To Favorites</button>
      </div>
    )
  }
}
export default AddFavorites
