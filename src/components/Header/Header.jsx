import React, { useState } from "react";
import { BurgerIcon, NerdflixLogo } from "../../icons";
import { Star } from "../../icons/Star";
import classNames from "classnames";

import "./Header.css";

const Header = ({ allFavourite, showOnlyFavourite, setShowOnlyFavourite }) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleHide = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="header-wrapper">
      <div className="header-main">
        <div className="burger-button" onClick={toggleHide}>
          <BurgerIcon />
        </div>
        <ul className={classNames({ "nav-bar": true }, { "hide-menu": isToggled })}>
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
