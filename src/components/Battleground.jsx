import React, { useEffect, useState } from "react";
import axios from "axios";
import shuffle from "../lib/utils";
import Loader from "./Loader";

// Appel API
const Battleground = () => {
  const options = {
    method: "GET",
    params: { collectible: "1" },
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/minion'",
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
    },
  };

  // State de cardsClassic
  const [cardsClassic, setCardsClassic] = useState([]);

  // useEffect pour import mes Cards de l'api une fois au chargement de la page, filtré par props
  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => {
        const filterCards = data.filter(
          (card) =>
            card.name &&
            card.attack &&
            card.cost &&
            card.imgGold &&
            card.health &&
            card
        );

        // Variable random avec fonction shuffle pour afficher les cartes de l'api en mode aléatoire
        const random = shuffle(filterCards);
        // slice de random pour en recup 70 sur les 130
        setCardsClassic(random.slice(0, 14));
      });
  }, []);

  return (
    /* Methode pour mettre l'enfant Grid en responsive (parent en flex) */
    <div>
      {cardsClassic.length ? (
        <div id="cardbattlegroundcontainer" className="relative flex pt-14">
          <img
            src="/assets/battlegroundgame2.jpg"
            alt="battleground"
            className="w-full"
          />

          {/* Grid pour l'affichage des cartes sur le battleground */}

          <div
            id="battlegroundContainer"
            className="absolute pt-14 top-0 grid w-full h-full grid-cols-1 grid-rows-[10%_19%_1fr_1fr_16%_16%] justify-items-center"
          >
            <div className="w-full h-full " />

            <div
              id="ennemyHero"
              className="w-[8.5%] h-[85%] bg-[url('/assets/classes/Guerrier.png')] bg-[length:100%] flex justify-center"
            />
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {/* on map 7 cartes des 70 et on les affiches */}
              {cardsClassic.slice(0, 7).map((card, index) => (
                <div
                  key={index}
                  id="cardBattlegroundEnnemy1"
                  className="w-20 h-20 "
                >
                  <img
                    src={card.imgGold}
                    alt={card.name}
                    className="w-[6.5%] cursor-pointer overflow-hidden transition-all ease-in-out duration-500 hover:w-[15%] hover:z-10 absolute"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {cardsClassic.slice(7, 14).map((card, index) => (
                <div
                  key={index}
                  id="cardBattlegroundAllie1"
                  className="w-20 h-20 "
                >
                  <img
                    src={card.imgGold}
                    alt={card.name}
                    className="w-[6.5%]  cursor-pointer overflow-hidden transition-all ease-in-out duration-500 hover:w-[15%] hover:z-10 absolute"
                  />
                </div>
              ))}
            </div>
            <div
              id="allieHero"
              className="w-[8.5%] h-[100%] bg-[url('/assets/classes/Druide.png')] bg-[length:18vw] flex justify-center bg-no-repeat pr-[18.5%]"
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Battleground;
