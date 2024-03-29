import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import AddCart from './components/AddCart';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <span>Movie Card Library CRUD</span>
        <Switch>
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/">
            <MovieList />
            <AddCart />
          </Route>
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
