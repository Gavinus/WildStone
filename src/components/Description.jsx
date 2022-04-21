import React from "react";

const Description = () => {
  return (
    <div className="bg-green-700 ">
      <div className="flex flex-col items-center min-h-screen justify-center bg-[url('./images/descriptionDruide.png')]">
        <h1 className="text-black text-7xl">Druide</h1>
        <h2 className="text-5xl text-orange-600">
          La nature se dressera contre vous !
        </h2>
        <p className="ml-5 mr-5 text-xl text-center text-black">
          Pour préserver l’équilibre, prenez l’une des nombreuses formes
          sauvages et déchaînez le courroux de la nature sur vos adversaires.
          Les druides sont des combattants versatiles disposant d’une multitude
          de choix pour affronter leurs adversaires. Utilisez des améliorations,
          invoquez des bêtes, lancez des sorts de soins ou infligez des dégâts à
          tous ceux qui s’opposent à la nature.
        </p>
      </div>

      <h1 className="flex mt-20 ml-10 text-3xl text-white ">
        Pouvoir héroïque du druide :
      </h1>
      <h1 className="flex mt-5 ml-10 text-xl text-white">
        Laissez parler l’animal en vous pour obtenir une carapace d’acier et des
        griffes acérées.
      </h1>

      <div className="flex items-center justify-center">
        <img
          className="w-1/4"
          src="./images/powerDruide.png"
          alt="power_druide"
        />
        <div className="flex flex-col text-center">
          <h1 className="text-4xl text-orange-600 ">Changeforme :</h1>
          <p className="text-2xl">
            L’activation du pouvoir héroïque du druide octroie 1 point d’armure
            et 1 attaque pour ce tour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
