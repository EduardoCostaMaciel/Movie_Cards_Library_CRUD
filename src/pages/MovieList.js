import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

import './movieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    // this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const filmes = await movieAPI.getMovies();
    // console.log(filmes);
    this.setState({
      movies: filmes,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // console.log(movies);
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-list" className="movieList-container">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
