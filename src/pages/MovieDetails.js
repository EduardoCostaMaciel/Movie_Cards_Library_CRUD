import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import './movieList.css';
import './movieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
      status: false,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleDelete() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({ status: true });
  }

  async fetchMovie() {
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    const filme = await movieAPI.getMovie(id);
    // console.log(filme);
    this.setState({
      movies: filme,
      loading: false,
    });
  }

  render() {
    const { movies, loading, status } = this.state;

    if (loading === true) return <Loading />;
    if (status) return <Redirect to="/" />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    const { match: { params: { id } } } = this.props;

    return (
      <div
        data-testid="movie-details"
        className="movieDetails-container-card"
      >
        <p>{`Title: ${title}`}</p>
        <img alt="Movie Cover" width="250px" src={ `../${imagePath}` } />
        <div className="movieDetails-container-card-div">
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="movieDetails-container-card-link">
          <div>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
          <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  match: {},
};

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
};

export default MovieDetails;
