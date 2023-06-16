import React from "react";
import { Search, Sort } from "../../components";

import "./SearchAndSort.css";

const SearchAndSort = () => {
  return (
    <div className="movies-wrapper">
      <div className="movies-main">
        <h3 className="movies-header">Movies</h3>
        <div className="search-sort">
          <Search />
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;
