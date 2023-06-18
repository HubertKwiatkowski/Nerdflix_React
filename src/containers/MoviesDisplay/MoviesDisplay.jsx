import React from "react";
import { MovieItem } from "../../components";

import "./MoviesDisplay.css";

const MoviesToDisplay = ({ movieData, searchResults, displayOrder }) => {
  let moviesToRender;

  if (searchResults.length > 0) {
    moviesToRender = searchResults;
  } else moviesToRender = movieData.data.movies;

  if (displayOrder==="letterAscending") {
    moviesToRender.sort((a, b) => a.title.localeCompare(b.title));
  } else if (displayOrder==="letterDescending") {
    moviesToRender.sort((a, b) => b.title.localeCompare(a.title));
  } else if (displayOrder==="ratingAscending") {
    moviesToRender.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  } else if (displayOrder==="ratingDescending") {
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
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesToDisplay;
