import React, { Component } from 'react';
import * as MoviesAPI from '../services/movieDb-api';
import queryString from 'query-string';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const mapper = movies => {
  return movies.map(({ id, title }) => ({
    id,
    title,
  }));
};

export default class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
    searchedQuery: '',
  };

  fetchSearchMovies = query => {
    MoviesAPI.fetchSearchMovies(query)
      .then(data =>
        this.setState({
          movies: [...mapper(data.results)],
        }),
      )
      .catch(error => this.setState({ error }));

    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });

    this.setState({ searchedQuery: query });
  };
  componentDidMount() {
    const searchedQuery = queryString.parse(this.props.location.search);

    searchedQuery.query &&
      MoviesAPI.fetchSearchMovies(searchedQuery.query)
        .then(data =>
          this.setState({
            movies: [...mapper(data.results)],
          }),
        )
        .catch(error => this.setState({ error }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.fetchSearchMovies} />
        <MoviesList movies={movies} />
      </div>
    );
  }
}
