import React, { useEffect, useState } from "react";
import axios from "axios";
import shuffle from "../lib/utils";

const Battleground = () => {
  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
    },
  };

  const [cardsClassic, setCardsClassic] = useState([]);
  console.log(cardsClassic);
  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => {
        const filterCards = data.Classic.filter(
          (card) =>
            card.name &&
            card.attack &&
            card.cost &&
            card.imgGold &&
            card.health &&
            card
        );
        const random = shuffle(filterCards);
        console.log(random);
        setCardsClassic(random.slice(0, 70));
      });
  }, []);

  return (
    <div id="cardbattlegroundcontainer" className="relative flex">
      <img
        src="./images/battlegroundgame2.jpg"
        alt="battleground"
        className="w-full"
      />
      <div
        id="battlegroundContainer"
        className="absolute top-0 grid w-full h-full grid-cols-1 grid-rows-[10%_19%_1fr_1fr_16%_16%] justify-items-center"
      >
        <div className=" w-full h-full" />

        <div
          id="ennemyHero"
          className="w-[8.5%] h-[85%] bg-[url('../images/classes/Guerrier.png')] bg-[length:100%] flex justify-center"
        />
        <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
          {cardsClassic.slice(0, 7).map((card) => (
            <div id="cardBattlegroundEnnemy1" className="w-20 h-20 ">
              <img
                src={card.imgGold}
                alt={card.name}
                className="w-[6.5%] cursor-pointer overflow-hidden transition-all ease-in-out duration-500 hover:w-[15%] absolute"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-around w-[55%] p-[0 60px 0 25px] m-[0_30px_0_10px]">
          {cardsClassic.slice(7, 14).map((card) => (
            <div id="cardBattlegroundAllie1" className="w-20 h-20 ">
              <img
                src={card.imgGold}
                alt={card.name}
                className="w-[6.5%]  cursor-pointer overflow-hidden transition-all ease-in-out duration-500 hover:w-[15%] absolute"
              />
            </div>
          ))}
        </div>
        <div
          id="allieHero"
          className="w-[8.5%] h-[100%] bg-[url('../images/classes/Druide.png')] bg-[length:18vw] flex justify-center bg-no-repeat pr-[18.5%]"
        />
      </div>
    </div>
  );
};

export default Battleground;
