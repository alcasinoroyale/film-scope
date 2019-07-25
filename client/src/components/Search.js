import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  }

  render() {
    return (
      <div className="search-form">
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="search" name="query" value={this.state.query} />
      </form>
      </div>
    )
  }
}

export default Search;
