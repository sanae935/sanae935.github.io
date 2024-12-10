import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Movie Search App</h1>
                  </header>

        <Routes>
          {}
          <Route
            exact
            path="/"
            element={
              <>
                <SearchBar setMovies={setMovies} setLoading={setLoading} setError={setError} />
                <MovieList movies={movies} loading={loading} error={error} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;