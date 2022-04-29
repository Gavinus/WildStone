import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import links from "../data/links";

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
    // logo pour dérouler le menu au click true ou false
    <div id="logoOpenMenu">
      {/* div du backgroundMenu */}
      {/* Ternaire de l'enfer pour afficher ou non le menu grace au true et false */}
      <div
        onClick={() => showMenu()}
        aria-hidden
        onKeyDown={showMenu}
        id="menu"
        className={`flex justify-center items-center overflow-hidden transition-all ease-in-out duration-500 fixed w-full top-12 ${
          menu ? "h-screen" : "h-0"
        }`}
      >
        <img src="./images/battleground1.png" alt="menu" className="w-full" />
        {/* Parcour l'api pour recuperer les dos de carte avec leur numero directement */}
        {backCards.length && (
          <div
            id="menu-div-content"
            className="absolute flex items-center justify-center w-4/5 mb-14"
          >
            {/* Map pour le chemin des links de chaque page avec le tableau links */}
            {links.map((link, index) => (
              // div card1
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
                  className="flex justify-center items-center text-2xl	"
                >
                  <h1
                    className={`cursor text-white absolute text-center text-1 ${
                      menu ? "block" : "hidden"
                    }`}
                  >
                    {link.name}
                  </h1>
                  <img
                    src={backCards[link.img].img}
                    alt="card1"
                    className={` ${menu ? "block" : "hidden"}`}
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
        src="./images/logo-wild-heartstone.png"
        alt="logoOpen"
        className="w-100 cursor-pointer my-0 mx-auto mt-12 fixed left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
// On oublie pas d'exporter son composant
export default Menu;
