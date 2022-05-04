import React, { useEffect, useState } from "react";
import axios from "axios";
import shuffle from "../lib/utils";
import Loader from "./Loader";
import Card from "./Card";

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
  const [cardsAlly, setCardsAlly] = useState([]);
  const [cardsEnnemy, setCardsEnnemy] = useState([]);
  //   const [count, setCount] = useState(0);

  //   const arrayFighting = [];

  //   const fighting = async (card) => {
  //     if (arrayFighting.length < 2) {
  //       if (arrayFighting.length === 0) {
  //         if (card.clan === "ally" && !card.used) {
  //           arrayFighting.push(card);
  //         } else {
  //           console.log(card.used ? "Choose a card no used" : "Choose your card");
  //         }
  //       } else if (card.clan === "ennemy") {
  //         arrayFighting.push(card);
  //         const attacked = cardsEnnemy.map((ennemy) => {
  //           let { health } = ennemy;
  //           if (ennemy.cardId === arrayFighting[1].cardId) {
  //             health = ennemy.health - arrayFighting[0].attack;
  //           }
  //           return { ...ennemy, health };
  //         });

  //         const attacker = cardsAlly.map((ally) => {
  //           let { used, health } = ally;
  //           if (ally.cardId === arrayFighting[0].cardId) {
  //             used = true;
  //             health = ally.health - arrayFighting[1].attack;
  //           }

  //           return { ...ally, health, used };
  //         });

  //         setCardsEnnemy(attacked);
  //         setCardsAlly(attacker);
  //         console.log(cardsAlly);
  //       } else {
  //         console.log("Please, choose an ennemy");
  //       }
  //     }
  //   };

  // useEffect pour import mes Cards de l'api une fois au chargement de la page, filtré par props
  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => {
        const filterCards = data
          .filter(
            (card) =>
              card.name &&
              card.attack &&
              card.cost &&
              card.imgGold &&
              card.health &&
              card
          )
          .map((card) => ({ ...card, used: false }));

        // Variable random avec fonction shuffle pour afficher les cartes de l'api en mode aléatoire
        const random = shuffle(filterCards);
        const ennemy = random
          .slice(0, 7)
          .map((card) => ({ ...card, clan: "ennemy" }));
        const ally = random
          .slice(7, 14)
          .map((card) => ({ ...card, clan: "ally" }));
        // slice de random pour en recup 70 sur les 130
        setCardsEnnemy(ennemy);
        setCardsAlly(ally);
      });
  }, []);

  return (
    /* Methode pour mettre l'enfant Grid en responsive (parent en flex) */
    <div>
      {cardsAlly.length && cardsEnnemy.length ? (
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
            {/* <p className="text-3xl text-white">{round}</p> */}
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {/* on map 7 cartes des 70 et on les affiches */}
              {cardsEnnemy.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  //   fighting={fighting}
                  cardsAlly={cardsAlly}
                  cardsEnnemy={cardsEnnemy}
                  setCardsAlly={setCardsAlly}
                  setCardsEnnemy={setCardsEnnemy}
                />
              ))}
            </div>
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {cardsAlly.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  //   fighting={fighting}
                  cardsAlly={cardsAlly}
                  cardsEnnemy={cardsEnnemy}
                  setCardsAlly={setCardsAlly}
                  setCardsEnnemy={setCardsEnnemy}
                />
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
