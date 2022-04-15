import { useEffect, useState } from "react";
import axios from "axios";
// import Heroe from "./Heroe";

const Menu = () => {
  // State pour les dos de cartes
  const [backCards, setBackCards] = useState([]);

  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks",
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => setBackCards(data));
  }, []);
  // Destructuration des propriétés de notre objet qui nous intéressent
  return (
    <div id="menu" className="flex justify-center items-center">
      <img src="./images/battleground1.png" alt="menu" className="w-full" />
      {backCards.length && (
        <div
          id="menu-div-content"
          className="absolute flex items-center justify-center w-4/5 mb-6"
        >
          <div
            id="content-card1"
            className="flex justify-center items-center ml-4 "
          >
            <h1 className="absolute text-center text-1 font-normal md:font-bold text-orange-500">
              Rules Of Game
            </h1>
            <img src={backCards[0].img} alt="card1" className="" />
          </div>
          <div
            id="content-card2"
            className="flex justify-center items-center ml-12 text-1 font-normal md:font-bold"
          >
            <h1 className="absolute text-center">Heroes</h1>
            <img src={backCards[1].img} alt="card2" className="" />
          </div>
          <div
            id="content-card3"
            className="flex justify-center items-center ml-12 text-1 font-normal md:font-bold"
          >
            <h1 className="absolute text-center">Battleground</h1>
            <img src={backCards[2].img} alt="card3" className="" />
          </div>
          <div
            id="content-card4"
            className="flex justify-center items-center ml-12 text-1 font-normal md:font-bold"
          >
            <h1 className="absolute text-center">Contact</h1>
            <img src={backCards[3].img} alt="card4" className="" />
          </div>
        </div>
      )}
    </div>
  );
};
// On oublie pas d'exporter son composant
export default Menu;
