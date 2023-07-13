import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movieCard-container">
        <img src={ imagePath } width="200px" alt="" />
        <div>
          <p className="movieCard-title">{ title }</p>
          <p>{ storyline }</p>
        </div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object),
};

export default MovieCard;
