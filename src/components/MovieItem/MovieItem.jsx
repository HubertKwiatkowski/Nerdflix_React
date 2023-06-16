import React from "react";
import { Like } from "../../icons";

import "./MovieItem.css";

const MovieItem = ({ title, urlPoster, year, rating }) => {
  const handleImageError = (event) => {
    event.target.src = "img/fallback-image.png";
    event.target.classList.add("movie-img-error");
  };

  return (
    <div className="movie-item-wrapper">
      <div className="img-wrapper">
        <img
          className="movie-img"
          src={urlPoster}
          alt={title}
          onError={handleImageError}
        />
        <div className="movie-hover">
          <div className="movie-like">
            <Like />
          </div>
          <div className="movie-rating">{rating}</div>
        </div>
      </div>
      <div className="movie-description">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};

export default MovieItem;
