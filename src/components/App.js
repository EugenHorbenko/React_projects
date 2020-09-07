import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from '../pages/Home';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import MoviesPage from '../pages/MoviesPage';
import Nav from './Nav';

const AsyncHome = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "home-page" */),
);
const AsyncMovieDetails = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */
  ),
);
const AsyncMoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <Suspense fallback={<h1>Loader...</h1>}>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/movies/:id" component={AsyncMovieDetails} />
            <Route path="/movies" component={AsyncMoviesPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
