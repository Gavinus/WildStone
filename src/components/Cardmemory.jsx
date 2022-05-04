import PropTypes from "prop-types";
import React from "react";
import "./card.css";

const Cardmemory = ({ card, choixHand, flipped, disabled }) => {
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

Cardmemory.propTypes = {
  choixHand: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,

  card: PropTypes.shape({
    image: PropTypes.string,
    matched: PropTypes.bool,
    type: PropTypes.string,
  }).isRequired,
};

export default Cardmemory;
