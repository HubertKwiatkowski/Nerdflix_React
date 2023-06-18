import React from "react";
import { MovieItem } from "../../components";

import "./MoviesDisplay.css";

const MoviesToDisplay = ({ movieData, searchResults }) => {
  let moviesToRender;

  if (searchResults.length > 0) {
    moviesToRender = searchResults;
  } else moviesToRender = movieData.data.movies;

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
