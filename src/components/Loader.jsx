import React from "react";
import quoteHistory from "../data/historyquote";
// import de la fonction getRandom qui est dans "utils"
import { getRandom } from "../lib/utils";

const Loader = () => {
  // On crée un state qui recupère notre tableau "quoteHistory" et qui fait un random de celui ci qui parcour de 0 à la longueur du tableau
  const persoQuote = getRandom(0, quoteHistory.length);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div
        className="absolute top-[15%] text-[white] text-center text-[28px]"
        style={{ textShadow: "3px 3px 2px black" }}
      >
        <p>Loading...</p>
      </div>

      <div className="animate-[scale_1.5s_ease-in-out_infinite]">
        <img src="/assets/logo_texture.png" alt="logo" className="z-20" />
      </div>
      <div
        className="w-[28vw] mr-16 text-[35px] text-[white]"
        style={{ textShadow: "3px 3px 2px black" }}
      >
        {/* on appel le tableau d'objet quoteHistory[on appel la state "persoQuote" et on affiche le paramètre que l'on souhaite ".quote" ou ".persoquote" */}
        <h2>{quoteHistory[persoQuote].quote}</h2>
        <h2>[{quoteHistory[persoQuote].persoquote}]</h2>
      </div>
    </div>
  );
};

export default Loader;
