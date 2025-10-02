import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => movie.title.toLowerCase().includes(query.trim().toLowerCase()) || movie.description.toLowerCase() === query.trim().toLowerCase() || movie.description.toLowerCase().includes(query.trim().toLowerCase()));
  const movieSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
  <div className="page">
    <div className="page-content">
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
              onChange={movieSearch}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} query={query} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>);
};
