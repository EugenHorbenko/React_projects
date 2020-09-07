import React, { Component } from 'react';
import * as MoviesAPI from '../services/movieDb-api';

const mapper = actors => {
  return actors.map(({ id, name, character, profile_path: imgUrl }) => ({
    id,
    name,
    character,
    imgUrl,
  }));
};

const getIdFromProps = props => props.match.params.id;

export default class Cast extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    MoviesAPI.fetchMovieCast(getIdFromProps(this.props))
      .then(data =>
        this.setState({
          actors: [...mapper(data.cast.slice(0, 5))],
        }),
      )

      .catch(error => this.setState({ error }));
  }

  render() {
    const { actors } = this.state;
    return (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w235_and_h235_face${actor.imgUrl}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
