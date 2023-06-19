import React, { useState } from "react";
import { NerdflixLogo } from "../../icons";
import { Star } from "../../icons/Star";

import "./Header.css";

const Header = ({ allFavourite, showOnlyFavourite, setShowOnlyFavourite }) => {
  return (
    <div className="header-wrapper">
      <div className="header-main">
        <ul className="nav-bar">
          <li className="nav-bar-pos">Homepage</li>
          <li className="nav-bar-pos">Series</li>
          <li className="nav-bar-pos">Movies</li>
        </ul>

        <div className="logo">
          <NerdflixLogo />
        </div>
        <div
          className="stars"
          onClick={() => {
            if (allFavourite.length > 0) {
              setShowOnlyFavourite(!showOnlyFavourite);
            }
          }}
        >
          <Star />
          <span className="stars-counter">{allFavourite.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
