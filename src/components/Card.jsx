import { PropTypes } from "prop-types";
import { useState } from "react";
import fighting from "../lib/fight";

const Card = ({
  card,
  round,
  setCardsAlly,
  setCardsEnemy,
  setMessageRight,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      id="cardBattlegroundAlly1"
      className={`w-28 h-20 ${card.health <= 0 ? "hidden" : "block"}`}
      onClick={() => {
        setSelected(true);
        return round
          ? fighting(card, setCardsAlly, setCardsEnemy, setMessageRight)
          : fighting(card, setCardsEnemy, setCardsAlly, setMessageRight);
      }}
      onKeyDown={() => {
        setSelected(true);
        fighting(card, setCardsEnemy, setCardsAlly, setMessageRight);
      }}
      aria-hidden
    >
      <div
        className={`cursor-pointer active:drop-shadow-3xl overflow-hidden transition-all ease-in-out duration-500 hover:z-10 relative ${
          card.used && card.clan === "ally"
            ? "opacity-50"
            : "opacity-100 hover:scale-[2]"
        } ${selected && card.clan === "ally" ? "drop-shadow-3xl" : ""}`}
      >
        <img src={card.imgGold} alt={card.name} className="w-full" />
        <div className="absolute bottom-0 right-[3.5%] w-[20%] ">
          <img src="/assets/gouttelife.png" alt="life" className="" />
          <p
            className="absolute top-0 right-[25%] text-[white] text-[23px]"
            style={{ textShadow: "0 0 3px black" }}
          >
            {card.health}
          </p>
        </div>
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
  setCardsAlly: PropTypes.func.isRequired,
  setCardsEnemy: PropTypes.func.isRequired,
  setMessageRight: PropTypes.func.isRequired,
  round: PropTypes.bool.isRequired,
};

export default Card;
