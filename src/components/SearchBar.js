import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setMovies, setLoading, setError }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {

      const response = await axios.get(
        `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=9267ac53`
      );

      
      console.log(response.data);

      if (response.data.Response === 'True') {
        setMovies(response.data.Search || []);
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch (error) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;