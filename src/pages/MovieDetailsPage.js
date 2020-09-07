import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import * as MoviesAPI from '../services/movieDb-api';

const getIdFromProps = props => props.match.params.id;

const AsyncMovieDetails = lazy(() =>
  import(
    '../components/MovieDetails' /* webpackChunkName: "movieDetails-page" */
  ),
);

export default class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
    error: null,
    isLoading: false,
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    // this.props.history.location.pathname.includes('movies')
    //   ? history.push('/movies')
    //   : history.push('/');
    history.goBack();
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    MoviesAPI.fetchMovieDetails(getIdFromProps(this.props))
      .then(data =>
        this.setState({
          movieDetails: {
            id: data.id,
            title: data.title,
            overview: data.overview,
            imgUrl: data.poster_path,
            avgVote: data.vote_average,
            totalVotes: data.vote_count,
            genres: data.genres,
            year: data.release_date.substring(0, 4),
          },
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(this.setState({ isLoading: false }));
  }
  render() {
    const { movieDetails, isLoading } = this.state;
    const { match } = this.props;
    return (
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncMovieDetails
              onGoBack={this.handleGoBack}
              details={movieDetails}
            />
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Suspense>
        )}
      </div>
    );
  }
}
