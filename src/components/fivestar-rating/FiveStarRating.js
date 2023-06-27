import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

function FiveStarRating({ rating }) {
  const starArray = [];
  const StarFillCount = Math.floor(rating);

  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  const EmptyStarCount = 5 - StarFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= StarFillCount; i++) {
    starArray.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasHalfStar) {
    starArray.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= EmptyStarCount; i++) {
    starArray.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starArray}</div>;
}

export default FiveStarRating;
