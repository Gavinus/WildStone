import React from "react";
import Stars from "./Stars";

const Contact = () => {
  return (
     
    <div className="flex gap-4 bg-black ">

      <div className="fixed w-1/2 bg-scroll flex-start bp2:ml-[0%]">
        <img className="h-full bp2:w-0" src="/assets/dessincontact.png" alt="contact"  />
      </div>

      <div className="flex-end ml-[50%] bp2:ml-[0%] ">

        <div className="text-yellow-200 font-['.font/Belwe Bold.otf'] text-2xl ">
          <img  className="items-center mt-8"  src="/assets/logo_texture.png"  alt="logo" />

         
          <div className="grid grid-cols-1 space-y-5 mx-7 border-b-indigo-500">
            <div className="flex ml-5 bp3:ml-1 ">
              <label className="w-3/4" htmlFor="name">
              Nom :
                <input
                  className=" w-11/12 ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600"
                  type="name"
                  id="name"
                  name="name"
                />
              </label>
            </div>
              <div className="flex ml-5 bp3:ml-1 ">
              <label className="w-3/4" htmlFor="email">
              Email :
                <input
                  className=" flex-end w-11/12 ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-[rgb(18,18,19)] border-b-sky-600 "
                  type="email"
                  id="email"
                  name="email"
                />
              </label>
            </div>
            
            <div>

              <label htmlFor="msg">
              Commentaires :
                <textarea
                  className="rounded-lg max-w-[90%] mx-10 w-5/6 h-60 mr-10 mt-8 ml-5 border-4 border-sky-600 bg-[rgb(18,18,19)] "
                  id="msg"
                  name="msg"
               />
              </label>
            </div>
           
            <div className="flex mx-8 gap-9 place-content-center">
              <Stars className="" />
              <button
                type="submit"
                className="px-4 mt-2 w-5/6 py-2 mb-10 font-bold bg-[rgb(27,27,27)] border-4 rounded border-sky-600 hover:bg-blue-400 hover:border-blue-500 text-sky-600"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
