import React from "react";
import Proptypes from "prop-types";

const Heroe = ({ nameClass }) => {
  return (
    <div className="flex flex-col items-center w-80">
      <img
        className="object-cover h-56"
        src={`./images/classes/${nameClass}.png`}
        alt="image_hero"
      />
      <h2>{nameClass}</h2>
    </div>
  );
};

Heroe.propTypes = {
  nameClass: Proptypes.string.isRequired,
};

export default Heroe;
