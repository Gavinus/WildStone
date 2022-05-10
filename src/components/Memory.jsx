import React, { useEffect, useState } from "react";
import datas from "../data/data.js";
import "../card.css";
import Cardmemory from "./Cardmemory";

const Memory = () => {
  // On declare des ustates pour le choix des cartes

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  const [disabled, setDisabled] = useState(false);

  // On melange les cartes du jeu

  const melangeCards = () => {
    const melangeCardes = [...datas, ...datas]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoice1(null);
    setChoice2(null);
    setCards(melangeCardes);
    setTurns(0);
  };

  // handle a choice
  const choixHand = (card) => {
    return choice1 ? setChoice2(card) : setChoice1(card);
    // return choixHand;
  };
  // au remet les deux choix à nul
  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choice1 && choice2) {
      setDisabled(true);

      if (choice1.image === choice2.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === choice1.image) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 50);
      }
    }
  }, [choice1, choice2]);

  // start new game automagically
  useEffect(() => {
    melangeCards();
  }, []);

  return (
    <div className="bg-no-repeat bg-center h-screen bg-[url('/assets/image-fond-landing-page.png')]">
      <h1>magic card</h1>
      <div>
        <div className="box-content flex flex-col mx-48 my-8">
          <div className="grid justify-center grid-cols-5 mx-10 my-10">
            {cards.map((card) => (
              <Cardmemory
                key={card.id}
                card={card}
                cardimage={card.image}
                choixHand={choixHand}
                flipped={
                  card === choice1 || card === card.choice2 || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <h2 className="mx-12 text-3xl font-bold text-yellow-500">
            Nombre de tours : {turns}
          </h2>
          <button
            className="px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded-full mx-96 hover:bg-blue-500"
            type="button"
            onClick={melangeCards}
          >
            Nouvelle Partie
          </button>
        </div>
      </div>
    </div>
  );
};
export default Memory;
