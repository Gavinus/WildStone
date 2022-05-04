import PropTypes from "prop-types";
import React from "react";
// import backCard from "../public/assets/back-card.png";
import "./card.css";

const Card = ({ card, choixHand, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      choixHand(card);
    }
  };

  return (
    <div className="card">
      <div
        className={flipped ? "flipped" : ""}
        aria-hidden="true"
        role="button"
        tabIndex="0"
      >
        <img className="front" src={card.image} alt={card.image} />
        <img
          className="back"
          src="./assets/back-card.png"
          onClick={() => handleClick()}
          alt="cover"
          onKeyDown={handleClick}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  choixHand: PropTypes.string.isRequired,
  flipped: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
};

export default Card;
