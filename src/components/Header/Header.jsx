import React from "react";
import { NerdflixLogo } from "../../icons";
import { Star } from "../../icons/Star";

import "./Header.css";

const Header = () => {
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
        <div className="stars">
          <Star />
          <span className="stars-counter">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
