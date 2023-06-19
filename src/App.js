import React, { useState } from "react";
import { Header } from "./components";
import { MoviesToDisplay, SearchAndSort } from "./containers";
import data from "./data/imdb-top-50.json";

import "./App.css";

function App() {
  const movieData = data;
  const [searchResults, setSearchResults] = useState([]);
  const [displayOrder, setDisplayOrder] = useState("ratingDescending");
  const [showOnlyFavourite, setShowOnlyFavourite] = useState(false);
  const [allFavourite, setAllFavourite] = useState([]);

  return (
    <div className="app-wrapper">
      <Header
        allFavourite={allFavourite}
        showOnlyFavourite={showOnlyFavourite}
        setShowOnlyFavourite={setShowOnlyFavourite}
      />
      <SearchAndSort
        movieData={movieData}
        setSearchResults={setSearchResults}
        setDisplayOrder={setDisplayOrder}
      />
      <MoviesToDisplay
        movieData={movieData}
        searchResults={searchResults}
        displayOrder={displayOrder}
        allFavourite={allFavourite}
        setAllFavourite={setAllFavourite}
        showOnlyFavourite={showOnlyFavourite}
        setShowOnlyFavourite={setShowOnlyFavourite}
      />
    </div>
  );
}

export default App;
