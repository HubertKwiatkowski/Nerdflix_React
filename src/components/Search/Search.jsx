import React, { useState } from "react";
import { MagGlass } from "../../icons";

import "./Search.css";

const Search = ({ setSearchResults, movieData }) => {
  const [query, setQuery] = useState("");
  const movies = movieData.data.movies;
  let matchingResults;

  const search = () => {
    matchingResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(matchingResults);
  }

  const handleInputChange= (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  }

  const handleFocus = (event) => {
    event.target.value = ''
    setSearchResults(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a title"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      <button type="submit" onClick={handleSubmit} className="mag-glass">
        <MagGlass />
      </button>
    </form>
  );
};

export default Search;
