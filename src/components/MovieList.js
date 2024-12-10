import React from 'react';

const MovieList = ({ movies, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!movies.length) return <div>No movies found.</div>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title} ({movie.Year})</h3>
          <img src={movie.Poster} alt={movie.Title} width="100" />
          <p>{movie.Type}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;