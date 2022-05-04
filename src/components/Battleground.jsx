import React, { useEffect, useState } from "react";
import axios from "axios";
import shuffle from "../lib/utils";
import Loader from "./Loader";
import Card from "./Card";
import fighting from "../lib/fight";

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
  const [round, setRound] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const changeTurn = () => {
    setRound(!round);
    setCardsAlly((value) =>
      value.map((card) => ({
        ...card,
        clan: card.clan === "ally" ? "ennemy" : "ally",
        used: false,
      }))
    );
    setCardsEnnemy((value) =>
      value.map((card) => ({
        ...card,
        clan: card.clan === "ennemy" ? "ally" : "ennemy",
        used: false,
      }))
    );
  };

  function getRandom(min, max) {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setMessage(!round ? "Your turn" : "Ennemy turn");
    const ennemyLength = cardsEnnemy.filter(
      (card) => !card.used && card.health > 0
    );
    const allyLength = cardsAlly.filter((card) => card.health > 0);
    if (round) {
      if (allyLength.length > 0 && ennemyLength.length > 0) {
        setTimeout(() => {
          fighting(
            ennemyLength[getRandom(0, ennemyLength.length)],
            setCardsAlly,
            setCardsEnnemy,
            setMessage2
          );
        }, 300);

        setTimeout(() => {
          fighting(
            allyLength[getRandom(0, allyLength.length)],
            setCardsAlly,
            setCardsEnnemy,
            setMessage2
          );
        }, 600);
      }

      const finishRound = cardsEnnemy.every((card) => card.used);
      if (finishRound) changeTurn();
    }
    if (
      cardsEnnemy.every((ennemy) => ennemy.health <= 0) ||
      cardsAlly.every((ennemy) => ennemy.health <= 0)
    ) {
      if (!ennemyLength.length && allyLength) setMessage("You wins");
      else if (!allyLength.length && ennemyLength) setMessage("Ennemy wins");
      else setMessage("Equal");
    }
  }, [round, cardsEnnemy, cardsAlly]);

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
          <p className="absolute text-xl text-center text-white w-min top-1/2 left-12">
            {message}
          </p>
          {!round && (
            <p className="absolute text-xl text-center text-white w-min top-1/2 right-12">
              {message2}
            </p>
          )}
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
                  round={round}
                  card={card}
                  setCardsAlly={setCardsAlly}
                  setCardsEnnemy={setCardsEnnemy}
                  setMessage2={setMessage2}
                />
              ))}
            </div>
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {cardsAlly.map((card, index) => (
                <Card
                  key={index}
                  round={round}
                  card={card}
                  setCardsAlly={setCardsAlly}
                  setCardsEnnemy={setCardsEnnemy}
                  setMessage2={setMessage2}
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
