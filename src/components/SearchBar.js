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
        `http://www.omdbapi.com/?i=tt3896198&apikey=9267ac53`
      );
      setMovies(response.data.Search || []);
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