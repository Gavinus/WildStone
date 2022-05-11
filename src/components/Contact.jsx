import React from "react";
import Stars from "./Stars";

const Contact = () => {
  return (
    <div className="flex gap-4 bg-black ">
      <div className="fixed w-1/2 bg-scroll flex-start bp2:ml-[0%]">
        <img
          className="h-full bp2:w-0"
          src="/assets/dessincontact.png"
          alt="contact"
        />
      </div>

      <div className="flex-end ml-[50%] bp2:ml-[0%] ">
        <div className="text-yellow-200 font-['.font/Belwe Bold.otf'] text-2xl ">
          <img
            className="items-center mt-8"
            src="/assets/logo_texture.png"
            alt="logo"
          />

          <form className="grid space-y-5 mx-7 border-b-indigo-500">
            <div className="flex ml-10 mr-14 bp3:ml-1 ">
              <label className="flex w-[100%] whitespace-nowrap" htmlFor="name">
                Nom :
                <input
                  className=" w-[80%] ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600"
                  type="name"
                  required
                  id="name"
                  name="name"
                />
              </label>
            </div>
            <div className="flex ml-10 mr-14 bp3:ml-1 ">
              <label
                className="flex w-[100%] whitespace-nowrap"
                htmlFor="email"
              >
                Email :
                <input
                  className=" w-[80%] ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600 "
                  type="email"
                  required
                  id="email"
                  name="email"
                />
              </label>
            </div>

            <div>
              <label className="ml-10" htmlFor="msg">
                Commentaires :
                <textarea
                  className="rounded-lg max-w-[90%] mx-10 w-5/6 h-60  mt-8  border-4 border-sky-600 bg-[rgb(18,18,19)] "
                  id="msg"
                  name="msg"
                />
              </label>
            </div>
            <div className="flex ">
              <div className="flex ml-10 gap-9">
                <Stars />
              </div>
              <div className="flex justify-end mr-14 w-[200%] ">
                <button
                  type="submit"
                  required
                  className=" px-4 w-[70%] h-[88%] py-2 mb-5 font-bold bg-[rgb(27,27,27)] border-4 rounded border-sky-600 hover:bg-blue-400 hover:border-blue-500 text-sky-600"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
