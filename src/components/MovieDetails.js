import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../css/MovieDetails.module.css';

export default class MovieDetails extends Component {
  state = {};

  static propTypes = {
    details: PropTypes.object.isRequired,
  };

  render() {
    const {
      id,
      title,
      overview,
      imgUrl,
      avgVote,
      genres,
      year,
    } = this.props.details;

    return (
      <div>
        <button type="button" onClick={this.props.onGoBack}>
          &#x2190; Back
        </button>
        <div className={styles.infoContainer}>
          {imgUrl && (
            <img
              className={styles.posterImg}
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imgUrl}`}
              alt={title}
            />
          )}
          <div>
            <h2>
              {title} ({year})
            </h2>
            <p>Avarage rating: {avgVote}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={styles.genresList}>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>

        <div>
          <p>Additional information</p>
          <Link to={`/movies/${id}/cast`}>
            <p>Cast</p>
          </Link>
          <Link to={`/movies/${id}/reviews`}>
            <p>Reviews</p>
          </Link>
        </div>
      </div>
    );
  }
}
