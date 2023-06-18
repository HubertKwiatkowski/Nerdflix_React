import React, { useState } from "react";
import { Header } from "./components";
import { MoviesToDisplay, SearchAndSort } from "./containers";
import data from "./data/imdb-top-50.json";

import "./App.css";

function App() {
  const movieData = data;
  const [searchResults, setSearchResults] = useState([]);
  const [displayOrder, setDisplayOrder] = useState("ratingDescending")

  return (
    <div className="app-wrapper">
      <Header />
      <SearchAndSort
        movieData={movieData}
        setSearchResults={setSearchResults}
        setDisplayOrder={setDisplayOrder}
      />
      <MoviesToDisplay
        movieData={movieData}
        searchResults={searchResults}
        displayOrder={displayOrder}
      />
    </div>
  );
}

export default App;
