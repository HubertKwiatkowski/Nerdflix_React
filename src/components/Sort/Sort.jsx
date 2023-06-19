import React, { useState } from "react";
import classNames from "classnames";
import { ArrowsUpDown } from "../../icons";

import "./Sort.css";

const Sort = ({ setDisplayOrder }) => {
  const [titleIsToggled, setTitleIsToggled] = useState(true);
  const [ratingIsToggled, setRatingIsToggled] = useState(true);

  const handleTitleClick = () => {
    setTitleIsToggled(!titleIsToggled);
  };

  const handleRatingClick = () => {
    setRatingIsToggled(!ratingIsToggled);
  };

  const handleSort = (order) => {
    if (order === "letterAscending") {
      setDisplayOrder("letterAscending");
    } else if (order === "letterDescending") {
      setDisplayOrder("letterDescending");
    } else if (order === "ratingAscending") {
      setDisplayOrder("ratingAscending");
    } else if (order === "ratingDescending") {
      setDisplayOrder("ratingDescending");
    }
  };

  return (
    <div>
      <p className="sort-by-text">Sort by</p>
      <div className="sort-wrapper">
        <div
          className={classNames("sort-by", { small: titleIsToggled })}
          onClick={handleTitleClick}
        >
          <div className="sort-by-btn">
            <p>Title</p>
            <ArrowsUpDown />
          </div>
          <ul className={classNames({ hide: titleIsToggled })}>
            <li
              className="sort-option"
              onClick={() => handleSort("letterAscending")}
            >
              (A-Z)
            </li>
            <li
              className="sort-option"
              onClick={() => handleSort("letterDescending")}
            >
              (Z-A)
            </li>
          </ul>
        </div>

        <div
          className={classNames("sort-by", { small: ratingIsToggled })}
          onClick={handleRatingClick}
        >
          <div className="sort-by-btn">
            <p>Rating</p>
            <ArrowsUpDown />
          </div>
          <ul className={classNames({ hide: ratingIsToggled })}>
            <li
              className="sort-option"
              onClick={() => handleSort("ratingDescending")}
            >
              (10-0)
            </li>
            <li
              className="sort-option"
              onClick={() => handleSort("ratingAscending")}
            >
              (0-10)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sort;
