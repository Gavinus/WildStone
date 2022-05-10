let arrayFighting = [];

const fighting = (card, setDefenser, setAttacker, setTurnMessage) => {
  if (arrayFighting.length === 2) arrayFighting = [];
  if (arrayFighting.length < 2) {
    if (arrayFighting.length === 0) {
      if (card.clan === "ally" && !card.used) {
        arrayFighting.push(card);
        setTurnMessage("");
      } else {
        setTurnMessage(
          card.used ? "Choose a card no used" : "Choose your card"
        );
      }
    } else if (card.clan === "enemy") {
      arrayFighting.push(card);
      setTurnMessage("");

      setDefenser((value) =>
        value.map((enemy) => {
          let { health } = enemy;
          if (enemy.cardId === arrayFighting[1].cardId) {
            health = enemy.health - arrayFighting[0].attack;
          }
          return { ...enemy, health };
        })
      );
      setAttacker((value) =>
        value.map((ally) => {
          let { used, health } = ally;
          if (ally.cardId === arrayFighting[0].cardId) {
            used = true;
            health = ally.health - arrayFighting[1].attack;
          }
          return { ...ally, health, used };
        })
      );
      setTurnMessage("");
    } else {
      setTurnMessage("Please, choose an enemy");
    }
  }
};

export default fighting;
