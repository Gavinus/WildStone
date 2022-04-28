import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const Heroe = ({ nameClass, location }) => {
  // Fonction permettant de remonter en haut de la page en cliquant sur le carousel.
  console.log(nameClass);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ul className="flex flex-col items-center m-auto w-80">
      <li>
        <Link onClick={scrollToTop} to={`/description/${nameClass}`}>
          <img
            className="object-cover h-56"
            src={`${
              location === "Description" ? ".." : "."
            }/images/classes/${nameClass}.png`}
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
  location: Proptypes.string.isRequired,
};

export default Heroe;
