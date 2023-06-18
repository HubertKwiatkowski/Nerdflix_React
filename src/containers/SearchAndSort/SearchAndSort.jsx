import React from "react";
import { Search, Sort } from "../../components";

import "./SearchAndSort.css";

const SearchAndSort = ({ setSearchResults, movieData, setDisplayOrder }) => {
  return (
    <div className="movies-wrapper">
      <div className="movies-main">
        <h3 className="movies-header">Movies</h3>
        <div className="search-sort">
          <Search movieData={movieData} setSearchResults={setSearchResults} />
          <Sort setDisplayOrder={setDisplayOrder} />
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;
