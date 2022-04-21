import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Stars = () => {
  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
    // other logic
  };

  return (
    <Rating
      className="flex-row"
      tooltipArray={["nul", "bof", "moyen", "top", "génial"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating}
    />
  );
};
export default Stars;
