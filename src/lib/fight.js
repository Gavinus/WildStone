let arrayFighting = [];

const fighting = (card, setDefenser, setAttacker, setMessage) => {
  if (arrayFighting.length === 2) arrayFighting = [];
  if (arrayFighting.length < 2) {
    if (arrayFighting.length === 0) {
      if (card.clan === "ally" && !card.used) {
        arrayFighting.push(card);
        setMessage("");
      } else {
        setMessage(card.used ? "Choose a card no used" : "Choose your card");
      }
    } else if (card.clan === "ennemy") {
      arrayFighting.push(card);
      setMessage("");

      setDefenser((value) =>
        value.map((ennemy) => {
          let { health } = ennemy;
          if (ennemy.cardId === arrayFighting[1].cardId) {
            health = ennemy.health - arrayFighting[0].attack;
          }
          return { ...ennemy, health };
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
      setMessage("");
    } else {
      setMessage("Please, choose an ennemy");
    }
  }
};

export default fighting;
