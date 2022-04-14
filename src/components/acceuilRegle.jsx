import React from "react";


const AcceuilRegle = () => {
  return (
   <div className="content-center justify-center bg-primary">
      <h1 className="mb-10 text-6xl text-center ">Règles du Jeu </h1>
          <div className="flex flex-col mx-10 ml-10 space-y-4 text-2xl ">
             <p>
                Après avoir choisi une des 9 classes jouables du jeu, les joueurs utilisent un deck de 30 cartes. Il peut être composé de deux exemplaires d'une carte simple. En revanche, il contient une seule unité de carte légendaire. Le deck peut contenir plusieurs cartes légendaires pour autant qu'elles soient différentes. Il doit être composé à la fois de cartes identiques à toutes les classes et de cartes spécifiques à la classe choisie.
             </p>
              <p>
                Au premier tour, les joueurs reçoivent 4 cartes. Ils peuvent modifier certaines d'entre-elles afin d'éviter d'avoir de grosses cartes impossibles à jouer en début de partie.
              </p>
              <img className= "mx-auto" src="./images/Changement cartes.png" alt="changcard" />
              <p>          
                Un tirage au sort définit le joueur qui débutera la partie.<br></br>
                La ressource utilisée dans le jeu est le cristal de mana. Il est représenté sur les cartes par la gemme bleue qui se trouve en haut à gauche de la carte. Il est utilisé pour invoquer les serviteurs, les sorts et utiliser le pouvoir des héros ainsi que l'équipement.<br></br>
              </p>
              <img className= "mx-auto" src="./images/explecard.png" alt="excard" />
              <p>
              Vous débutez la partie avec un point de cristal de mana. A chaque tour, vous recevez un point de mana supplémentaire. Le maximum de cristaux de mana collecté dans le jeu est de 10.
              </p>
              <img className= "object-cover mx-auto " src="./images/barremanaoff.png" alt="barremana" />
              <p>
                Chaque héros dispose d'une compétence propre qui lui coûte 2 cristaux de mana.<br></br>
                Le héros peut utiliser sa compétence à chaque tour.<br></br>
                Le héros s'accompagne de serviteurs dans la bataille grâce à des cartes serviteurs. Ceux-ci restent sur le champ de bataille et combattent pour le héros. Ils arrivent endormis sur le plateau de jeu et commencent à combattre au tour suivant. Le serviteur endormi et ne pouvant combattre est représenté par un "z" sur le plateau de jeu.<br></br>
              </p>
              <p>
                Le serviteur attaque l'adversaire à concurrence du nombre indiqué sur la gemme jaune flanquée d'une épée en bas à gauche de la carte.
              </p>
              <img className= "mx-auto" src="./images/Alura.png" alt="alura" />
              <p>
                La vie d'une carte est représentée par la gemme rouge en bas à droite.<br></br>
                Le serviteur peut avoir une compétence particulière. Elle est alors représentée par une icône brillante.<br></br>
                Le serviteur peut avoir un sous-type (bête, dragon, murloc, pirate, démon) qui l'influence.<br></br>
                Le serviteur dispose d'une compétence fréquente et non fréquente. <br></br>
                La première n'est pas définie sur la carte comme Provocation (Taunt), Cri de bataille (Battlecry),.... Elle est donc à connaître.<br></br>
                 La seconde est celle spécifiée sur la carte.<br></br>
                Les cartes de sort n'ont pas de valeur d'attaque ou de vie. <br></br>
                Elles sont jouées une seule fois et ensuite, elles sont perdues.<br></br>
                Les cartes d'arme/équipement ont une valeur d'attaque et de vie. <br></br>
                Le héros utilise des cristaux de mana pour pouvoir porter cet équipement.<br></br>
                Quand le héros porte un équipement, la carte de celui-ci perd un point de durabilité à chaque fois que le héros frappe.<br></br>
                Il existe une différence entre les cartes portant une gemme en leur centre et les autres.<br></br>
                 Ces dernières sont des cartes basiques. Les autres sont des cartes plus précieuses. La couleur de la gemme indique la rareté de la carte.<br></br>
              </p>
              <img className= "mx-auto" src="./images/Assassinate.png" alt="Assasinate" />
              <p>
                Le fond de la carte de sort détermine la classe à laquelle elle appartient. Ainsi : pourpre est pour le Démoniste, le bleu-vert pour le Mage, le bleu pour le Chaman, le noir pour le Voleur, le brun foncé pour le Guerrier, le brun clair pour le Druide, le blanc pour le Prêtre, le vert pour le Chasseur et le rose pour le Paladin. Le fond de couleur gris indique que la carte n'est dédiée à aucune classe.     
              </p>
            </div>
      </div>
  );
};

export default AcceuilRegle ;