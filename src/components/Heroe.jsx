import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const Heroe = ({ nameClass }) => {
  // Fonction permettant de remonter en haut de la page en cliquant sur le carousel.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ul className="flex flex-col items-center m-auto w-80">
      <li>
        <Link onClick={scrollToTop} to={`/home/description/${nameClass}`}>
          <img
            className="object-cover h-56"
            src={`/assets/classes/${nameClass}.png`}
            alt="image_hero"
          />
          <h2 className="text-center"> {nameClass}</h2>
        </Link>
      </li>
    </ul>
  );
};

Heroe.propTypes = {
  nameClass: Proptypes.string.isRequired,
};

export default Heroe;
