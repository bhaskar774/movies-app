import React from "react";
import s from "./styles.module.css";
import FiveStarRating from "../fivestar-rating/FiveStarRating";

function TvShowDetails({ showData }) {
  const rating = showData.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{showData.name}</div>
      <div className={s.ratings_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating} / 5</span>
      </div>
      <div className={s.description}>{showData.overview}</div>
    </div>
  );
}

export default TvShowDetails;
