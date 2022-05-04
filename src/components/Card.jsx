import { PropTypes } from "prop-types";
import { useState } from "react";
import fighting from "../lib/fight";

const Card = ({ card, round, setCardsAlly, setCardsEnnemy, setMessage2 }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      id="cardBattlegroundAllie1"
      className={`w-20 h-20 ${card.health <= 0 ? "hidden" : "block"}`}
      onClick={() => {
        setSelected(true);
        return round
          ? fighting(card, setCardsAlly, setCardsEnnemy, setMessage2)
          : fighting(card, setCardsEnnemy, setCardsAlly, setMessage2);
      }}
      onKeyDown={() => {
        setSelected(true);
        fighting(card, setCardsEnnemy, setCardsAlly, setMessage2);
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
  setCardsAlly: PropTypes.func.isRequired,
  setCardsEnnemy: PropTypes.func.isRequired,
  setMessage2: PropTypes.func.isRequired,
  round: PropTypes.bool.isRequired,
};

export default Card;
