import React from "react";
import { MagGlass } from "../../icons";

import "./Search.css";

const Search = () => {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a title"
      />
      <div className="mag-glass">
        <MagGlass />
      </div>
    </div>
  );
};

export default Search;
