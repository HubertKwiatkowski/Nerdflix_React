import React from "react";
import { MovieItem } from "../../components";

import "./MoviesToDisplay.css";

const MoviesToDisplay = ({
  movieData,
  searchResults,
  displayOrder,
  allFavourite,
  setAllFavourite,
  showOnlyFavourite,
  setShowOnlyFavourite,
}) => {
  const movies = movieData.data.movies;
  let moviesToRender = movies;

  if (showOnlyFavourite) {
    moviesToRender = movies.filter((movie) =>
      allFavourite.includes(movie.title)
    );
  }

  if (searchResults.length > 0) {
    if (showOnlyFavourite) {
      console.log(searchResults)
      console.log(allFavourite)
      moviesToRender = searchResults.filter((movie) => allFavourite.includes(movie.title))
    } else moviesToRender = searchResults;
  }

  if (displayOrder === "letterAscending") {
    moviesToRender.sort((a, b) => a.title.localeCompare(b.title));
  } else if (displayOrder === "letterDescending") {
    moviesToRender.sort((a, b) => b.title.localeCompare(a.title));
  } else if (displayOrder === "ratingAscending") {
    moviesToRender.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  } else if (displayOrder === "ratingDescending") {
    moviesToRender.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  return (
    <div className="movies-display-wrapper">
      <div className="movies-display-main">
        {moviesToRender.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            urlPoster={movie.urlPoster}
            year={movie.year}
            rating={movie.rating}
            allFavourite={allFavourite}
            setAllFavourite={setAllFavourite}
            setShowOnlyFavourite={setShowOnlyFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesToDisplay;
