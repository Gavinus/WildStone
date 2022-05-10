import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import links from "../data/links";
import BarLogin from "./BarLogin";

const Menu = () => {
  // Import API pour dos de carte
  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks",
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
    },
  };
  const [backCards, setBackCards] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => setBackCards(data));
  }, []);

  // State pour les dos de cartes

  const [menu, setMenu] = useState(false);

  // variable pour passer showMenu à true / false
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    /* logo pour dérouler le menu au click true ou false */
    <div id="logoOpenMenu">
      <BarLogin />
      {/* div du backgroundMenu */}
      {/* Ternaire de l'enfer pour afficher ou non le menu grace au true et false */}
      <div
        onClick={() => showMenu()}
        aria-hidden
        onKeyDown={showMenu}
        id="menu"
        className={`z-20 flex justify-center items-center overflow-hidden transition-all ease-in-out duration-500 fixed w-full top-12 ${
          menu ? "h-screen" : "h-0"
        }`}
      >
        <img src="/assets/battleground1.png" alt="menu" className="w-full" />
        {/* Parcour l'api pour recuperer les dos de carte avec leur numero directement */}
        {backCards.length && (
          <div
            id="menu-div-content"
            className="absolute flex items-center justify-center w-4/5 mb-14"
          >
            {/* Map pour le chemin des links de chaque page avec le tableau links */}
            {links.map((link, index) => (
              <div
                key={index}
                id="content-card1"
                className="flex justify-center items-center ml-4 animate-[float_2s_ease-in-out_infinite]"
              >
                {/* Test du link */}
                <Link
                  onClick={() => showMenu()}
                  aria-hidden
                  onKeyDown={showMenu}
                  to={link.path}
                  className="flex items-center justify-center text-2xl "
                >
                  <h1
                    className={`z-[2] cursor text-white absolute text-center text-1  bp2:text-[1rem] bp3:text-[0.75rem] bp4:text-[0.50rem]
                    ${menu ? "block" : "hidden"}`}
                  >
                    {link.name}
                  </h1>
                  <img
                    src={backCards[link.img].img}
                    alt="card1"
                    className={`brightness-[0.7] ${menu ? "block" : "hidden"}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <img
        onClick={() => showMenu()}
        aria-hidden
        onKeyDown={showMenu}
        src="/assets/logo-wild-heartstone.png"
        alt="logoOpen"
        className="fixed z-20 mx-auto my-0 mt-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-100 left-1/2"
      />
    </div>
  );
};

export default Menu;
