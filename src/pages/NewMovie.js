import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

import './newMovie.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { status: false };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ status: true });
  }

  render() {
    const { status } = this.state;
    if (status) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie" className="newMovie-container">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
