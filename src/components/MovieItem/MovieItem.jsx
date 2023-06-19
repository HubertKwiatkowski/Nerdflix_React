import React, { useState } from "react";
import { Like } from "../../icons";

import "./MovieItem.css";
import { Star } from "../../icons/Star";

const MovieItem = ({
  title,
  urlPoster,
  year,
  rating,
  allFavourite,
  setAllFavourite,
  setShowOnlyFavourite,
}) => {
  const [isInFavourite, setIsInFavourite] = useState(false);

  const handleImageError = (event) => {
    event.target.src = "img/fallback-image.png";
    event.target.classList.add("movie-img-error");
  };

  const addToFavourite = () => {
    if (allFavourite.includes(title)) {
      const updatedTitles = allFavourite.filter((movie) => movie !== title);
      if (updatedTitles.length === 0) {
        setShowOnlyFavourite(false);
      }
      setAllFavourite(updatedTitles);
    } else {
      setAllFavourite([...allFavourite, title]);
    }
    setIsInFavourite(!isInFavourite);
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
          <div className="movie-like" onClick={addToFavourite}>
            {isInFavourite ? <Star /> : <Like />}
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
