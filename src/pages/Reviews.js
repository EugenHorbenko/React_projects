import React, { Component } from 'react';
import * as MoviesAPI from '../services/movieDb-api';

const mapper = actors => {
  return actors.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
};

const getIdFromProps = props => props.match.params.id;

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    MoviesAPI.fetchMovieReviews(getIdFromProps(this.props))
      .then(data =>
        this.setState({
          reviews: [...mapper(data.results)],
        }),
      )

      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>There is no reviews for this movie</p>
    );
  }
}
