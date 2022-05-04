let arrayFighting = [];

const fighting = (card, setDefenser, defenser, setAttacker, attacker) => {
  if (arrayFighting.length === 2) arrayFighting = [];
  if (arrayFighting.length < 2) {
    if (arrayFighting.length === 0) {
      if (card.clan === "ally" && !card.used) {
        arrayFighting.push(card);
      } else {
        console.log(card.used ? "Choose a card no used" : "Choose your card");
      }
    } else if (card.clan === "ennemy") {
      arrayFighting.push(card);

      setDefenser(
        defenser.map((ennemy) => {
          let { health } = ennemy;
          if (ennemy.cardId === arrayFighting[1].cardId) {
            health = ennemy.health - arrayFighting[0].attack;
          }
          return { ...ennemy, health };
        })
      );
      setAttacker(
        attacker.map((ally) => {
          let { used, health } = ally;
          if (ally.cardId === arrayFighting[0].cardId) {
            used = true;
            health = ally.health - arrayFighting[1].attack;
          }
          return { ...ally, health, used };
        })
      );
      console.log(attacker);
    } else {
      console.log("Please, choose an ennemy");
    }
  }
  console.log(arrayFighting);
};

export default fighting;
