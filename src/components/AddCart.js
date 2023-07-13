import React from 'react';
import { Link } from 'react-router-dom';

import './addCard.css';

function AddCart() {
  return (
    <nav>
      <li><Link to="/movies/new">ADICIONAR CARTÃO</Link></li>
    </nav>
  );
}

export default AddCart;
