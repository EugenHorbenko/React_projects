import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(
      movie =>
        movie.title && (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ),
    )}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default MoviesList;
