import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar setMovies={setMovies} setLoading={setLoading} setError={setError} />
      <MovieList movies={movies} loading={loading} error={error} />
    </div>
  );
}

export default App;

