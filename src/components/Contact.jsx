import React from "react";
import Stars from "./Stars";

const Contact = () => {
  return (
    // Je divise la page en deux vi du grid , afin de séparer la page et de mettre l'img a gauche et le formulaire à droite
    <div className="grid grid-cols-2 gap-4 bg-black">
      <img className="h-full" src="/assets/dessincontact.png" alt="contact" />

      <div className="text-yellow-200 font-['.font/Belwe Bold.otf'] text-2xl ">
        <img
          className="items-center mt-8"
          src="/assets/logo_texture.png"
          alt="logo"
        />
        {/* Après avoir insérer le logo , je redivise via du grid juste en dessous pour pouvoir mettre le nom et le bouton a coté */}
        <div className="grid grid-cols-1 space-y-5 mx-7 border-b-indigo-500">
          <div className="flex ml-5 ">
            <div className="flex-initial ">Nom :</div>
            <label htmlFor="name">
              <input
                className=" w-96 ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600"
                type="name"
                id="name"
                name="name"
              />
            </label>
          </div>

          <div className="flex ml-5 ">
            <div className="flex-initial ">Email :</div>
            <label htmlFor="email">
              <input
                className=" w-96 ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600 "
                type="email"
                id="email"
                name="email"
              />
            </label>
          </div>
          {/* Je met du Flex afin de mettre un commentaire avec un gros text en dessous à entrer */}
          <div>
            <div className="flex-initial mx-10 mt-6 ml-5">Commentaires :</div>

            <label htmlFor="msg">
              <textarea
                className="rounded-lg max-w-[90%] mx-10 w-full h-60 mr-10 mt-8 ml-5 border-4 border-sky-600 bg-[rgb(18,18,19)] "
                id="msg"
                name="msg"
              />
            </label>
          </div>
          {/* J'insére ma notation étoile et mon bouton envoyer en Flex afin de les mettres à cotés */}
          <div className="flex mx-8 gap-9 place-content-center">
            <Stars className="" />
            <button
              type="submit"
              className="px-4 mt-2 w-80 py-2 mb-10 font-bold bg-[rgb(27,27,27)] border-4 rounded border-sky-600 hover:bg-blue-400 hover:border-blue-500 text-sky-600"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
