import React from "react";
import s from "./styles.module.css";
import { SMALL_IMAGE_BASE_URL } from "../../config";
const MAX_CHAR_COUNT = 20;

function TvShowList({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        src={`${SMALL_IMAGE_BASE_URL}${tvShow.poster_path}`}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_CHAR_COUNT
          ? tvShow.name.slice(0, MAX_CHAR_COUNT) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}

export default TvShowList;
