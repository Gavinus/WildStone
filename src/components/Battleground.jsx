import React, { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data)
      .then((data) => setCardsClassic(data));
  }, []);

  return (
    <div id="battlegroundContainer">
      <div id="cardbattlegroundcontainer">
        <img
          src="./images/battlegroundgame2.jpg"
          alt="battleground"
          className="w-full"
        />
        <div id="ennemyHero" className="" />
        <div id="cardBattlegroundEnnemy1" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy2" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy3" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy4" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy5" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy6" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundEnnemy7" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie1" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie2" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie3" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie4" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie5" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie6" className="w-20 h-20 bg-slate-300" />
        <div id="cardBattlegroundAllie7" className="w-20 h-20 bg-slate-300" />
        <div id="allieHero" className="w-20 h-20 bg-slate-300" />
      </div>
    </div>
  );
};

export default Battleground;
