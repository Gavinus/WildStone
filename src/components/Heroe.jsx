import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const Heroe = ({ nameClass }) => {
  return (
    <ul>
      <div className="flex flex-col items-center w-80">
        <li>
          <Link to={`/description/${nameClass}`}>
            <img
              className="object-cover h-56"
              src={`./images/classes/${nameClass}.png`}
              alt="image_hero"
            />
            <h2 className="text-center"> {nameClass}</h2>
          </Link>
        </li>
      </div>
    </ul>
  );
};

Heroe.propTypes = {
  nameClass: Proptypes.string.isRequired,
};

export default Heroe;
