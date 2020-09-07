import React, { Component } from 'react';

import * as MoviesAPI from '../services/movieDb-api';
import MoviesList from '../components/MoviesList';

const mapper = movies => {
  return movies.map(({ id, title }) => ({
    id,
    title,
  }));
};

export default class Home extends Component {
  state = {
    movies: [],
    error: null,
  };

  fetchPopularMovies = () => {
    MoviesAPI.fetchPopularMovies()
      .then(data => data.results)
      .then(data => this.setState({ movies: [...mapper(data)] }))
      .catch(error => this.setState({ error }));
  };
  componentDidMount() {
    this.fetchPopularMovies();
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h3>In trend now:</h3>
        <MoviesList movies={movies} />
      </div>
    );
  }
}
