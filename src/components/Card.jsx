import { PropTypes } from "prop-types";
import { useState } from "react";
import fighting from "../lib/fight";

const Card = ({
  card,
  //   fighting,
  cardsAlly,
  cardsEnnemy,
  setCardsAlly,
  setCardsEnnemy,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      id="cardBattlegroundAllie1"
      className={`w-20 h-20 ${card.health <= 0 ? "hidden" : "block"}`}
      onClick={() => {
        setSelected(true);
        fighting(card, setCardsEnnemy, cardsEnnemy, setCardsAlly, cardsAlly);
      }}
      onKeyDown={() => {
        setSelected(true);
        fighting(card, setCardsEnnemy, cardsEnnemy, setCardsAlly, cardsAlly);
      }}
      aria-hidden
    >
      <img
        src={card.imgGold}
        alt={card.name}
        className={`w-[6.5%] cursor-pointer active:drop-shadow-3xl overflow-hidden transition-all ease-in-out duration-500 hover:z-10 absolute ${
          card.used && card.clan === "ally"
            ? "opacity-50"
            : "opacity-100 hover:scale-[2]"
        } ${selected && card.clan === "ally" ? "drop-shadow-3xl" : ""}`}
      />
      <div
        className={`text-xs text-white ${
          card.clan === "ennemy" ? "-mt-10" : "mt-24"
        }`}
      >
        <p>
          Health: {card.health} - Attack: {card.attack}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    imgGold: PropTypes.string,
    name: PropTypes.string,
    used: PropTypes.bool,
    health: PropTypes.number,
    attack: PropTypes.number,
    clan: PropTypes.string,
  }).isRequired,
  cardsAlly: PropTypes.arrayOf(
    PropTypes.shape({
      imgGold: PropTypes.string,
      name: PropTypes.string,
      used: PropTypes.bool,
      health: PropTypes.number,
      attack: PropTypes.number,
      clan: PropTypes.string,
    })
  ).isRequired,
  cardsEnnemy: PropTypes.arrayOf(
    PropTypes.shape({
      imgGold: PropTypes.string,
      name: PropTypes.string,
      used: PropTypes.bool,
      health: PropTypes.number,
      attack: PropTypes.number,
      clan: PropTypes.string,
    })
  ).isRequired,
  setCardsAlly: PropTypes.func.isRequired,
  setCardsEnnemy: PropTypes.func.isRequired,
};

export default Card;
