import React from "react";
import Stars from "./Stars";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-black">
      <div>
        <img className="" src="./images/dessincontact.png" alt="contact" />
      </div>
      <div className="text-yellow-200 font-['.font/Belwe Bold.otf'] text-4xl ">
        <img src="./images/logo_texture.png" alt="logo" />
        <div className="grid grid-cols-1 space-y-5 mx-7 border-b-indigo-500">
          <div className="flex flex-1 ">
            <label htmlFor="name">
              <input
                className="ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-neutral-800 border-b-indigo-500 "
                type="name"
                id="name"
                name="name"
              />
              Nom
            </label>
          </div>

          <div className="flex flex-1">
            <label htmlFor="email">
              E-mail
              <input
                className="ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-neutral-800 border-b-indigo-500 "
                type="email"
                id="email"
                name="email"
              />
              E-mail
            </label>
          </div>

          <label htmlFor="msg">
            <textarea
              className="mt-8 border-2 border-b-4 border-indigo-500 bg-neutral-800 "
              id="msg"
              name="msg"
            />
            Commentaires
          </label>

          <Stars />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 mb-10 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500"
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
