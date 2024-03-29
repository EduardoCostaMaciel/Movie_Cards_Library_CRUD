import React from 'react';
import PropTypes from 'prop-types';

import './movieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <label htmlFor="movie_title">
        Título
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate movieForm-container-label-input"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="movie_subtitle">
        Subtítulo
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="movieForm-container-label-input"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      // <div className="row">
      <label htmlFor="movie_image">
        Imagem
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          className="movieForm-container-label-input"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
      </label>
      // </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label htmlFor="movie_storyline">
        Sinopse
        <textarea
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <label htmlFor="movie_genre">
        Gênero
        <select
          id="movie_genre"
          value={ genre }
          onChange={ (event) => this.updateMovie('genre', event.target.value) }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="movie_rating" className="movieForm-container-rating">
        Avaliação
        <input
          // placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          className="movieForm-container-rating-input"
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        className="movieForm-button-submit"
        onClick={ this.handleSubmit }
      >
        Submit
      </button>
    );
  }

  render() {
    return (
      <>
        <form className="movieForm-container">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
        </form>
        {this.renderSubmitButton()}
      </>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func,
}.isRequired;

export default MovieForm;
