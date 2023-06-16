import React from "react";
import { MovieItem } from "../../components";
import data from "../../data/imdb-top-50.json";

import "./MoviesDisplay.css";
import { SpinnerOfDots } from "../../icons";

const MoviesDisplay = () => {
  return (
    <div className="movies-display-wrapper">
      <div className="movies-display-main">
        {data.data.movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            urlPoster={movie.urlPoster}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
      <div className="spinner">
        <SpinnerOfDots />
      </div>
    </div>
  );
};

export default MoviesDisplay;
