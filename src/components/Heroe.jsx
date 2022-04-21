import React from "react";
import Proptypes from "prop-types";
import Link from "../data/links";

const Heroe = ({ nameClass }) => {
  return (
    <ul>
      <div className="flex flex-col items-center w-80">
        <li>
          <Link to="/Description" className="">
            <img
              className="object-cover h-56"
              src={`./images/classes/${nameClass}.png`}
              alt="image_hero"
            />
          </Link>
        </li>

        <Link to="/Description" className="{nameClass}">
          <h2> {nameClass}</h2>
        </Link>
      </div>
    </ul>
  );
};

Heroe.propTypes = {
  nameClass: Proptypes.string.isRequired,
};

export default Heroe;
