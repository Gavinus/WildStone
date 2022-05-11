import React, { useEffect, useState } from "react";
import axios from "axios";
import { shuffle } from "../lib/utils";
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
  const [cardsEnemy, setCardsEnemy] = useState([]);
  const [round, setRound] = useState(false);
  const [turnMessage, setTurnMessage] = useState("");
  const [messageRight, setMessageRight] = useState("");

  const changeTurn = () => {
    setRound(!round);
    setCardsAlly((value) =>
      value.map((card) => ({
        ...card,
        clan: card.clan === "ally" ? "enemy" : "ally",
        used: false,
      }))
    );
    setCardsEnemy((value) =>
      value.map((card) => ({
        ...card,
        clan: card.clan === "enemy" ? "ally" : "enemy",
        used: false,
      }))
    );
  };

  function getRandom(a, b) {
    let min = a;
    let max = b;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setTurnMessage(!round ? "Votre tour" : "Tour de l'adversaire");
    const enemyLength = cardsEnemy.filter(
      (card) => !card.used && card.health > 0
    );
    const allyLength = cardsAlly.filter((card) => card.health > 0);
    if (round) {
      if (allyLength.length > 0 && enemyLength.length > 0) {
        setTimeout(() => {
          fighting(
            enemyLength[getRandom(0, enemyLength.length)],
            setCardsAlly,
            setCardsEnemy,
            setMessageRight
          );
        }, 300);

        setTimeout(() => {
          fighting(
            allyLength[getRandom(0, allyLength.length)],
            setCardsAlly,
            setCardsEnemy,
            setMessageRight
          );
        }, 600);
      }

      const finishRound = cardsEnemy.every((card) => card.used);
      if (finishRound) changeTurn();
    }
    if (
      cardsEnemy.every((enemy) => enemy.health <= 0) ||
      cardsAlly.every((enemy) => enemy.health <= 0)
    ) {
      if (!enemyLength.length && allyLength) setTurnMessage("Vous avez gagné!");
      else if (!allyLength.length && enemyLength)
        setTurnMessage("Vous avez Perdu!");
      else setTurnMessage("Equality");
    }
  }, [round, cardsEnemy, cardsAlly]);

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
        const enemy = random
          .slice(0, 7)
          .map((card) => ({ ...card, clan: "enemy" }));
        const ally = random
          .slice(7, 14)
          .map((card) => ({ ...card, clan: "ally" }));
        // slice de random pour en recup 70 sur les 130
        setCardsEnemy(enemy);
        setCardsAlly(ally);
      });
  }, []);

  return (
    /* Methode pour mettre l'enfant Grid en responsive (parent en flex) */
    <div>
      {cardsAlly.length && cardsEnemy.length ? (
        <div className="relative flex pt-14">
          <p
            style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
            className="absolute text-xl text-center text-white w-min top-[46%] left-12"
          >
            {turnMessage}
          </p>
          {!round && (
            <p
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
              className="absolute text-xl text-center text-white w-min top-[46%] right-12"
            >
              {messageRight}
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
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {/* on map 7 cartes des 70 et on les affiches */}
              {cardsEnemy.map((card, index) => (
                <Card
                  key={index}
                  round={round}
                  card={card}
                  setCardsAlly={setCardsAlly}
                  setCardsEnemy={setCardsEnemy}
                  setMessageRight={setMessageRight}
                />
              ))}
            </div>
            <input
              onClick={changeTurn}
              type="image"
              alt="button"
              className=" h-[5%] absolute z-10 top-[46.5%] right-[14.5%] w-[6.5%]"
              src="/assets/end_turn.png"
            />
            <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
              {cardsAlly.map((card, index) => (
                <Card
                  key={index}
                  round={round}
                  card={card}
                  setCardsAlly={setCardsAlly}
                  setCardsEnemy={setCardsEnemy}
                  setMessageRight={setMessageRight}
                />
              ))}
            </div>
            <div className="w-[8.5%] h-[100%] bg-[url('/assets/classes/Druide.png')] bg-[length:18vw] flex justify-center bg-no-repeat pr-[18%]" />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Battleground;
