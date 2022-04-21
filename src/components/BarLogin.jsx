import React from "react";

const BarLogin = () => {
  return (
    <div className="flex justify-between w-full fixed h-14 bg-[url(https://cdn.discordapp.com/attachments/960537598365958174/961183931451981864/unknown.png)]">
      <div className="flex">
        <p className="mt-3 ml-8 text-white ">UserName</p>
        <p className="mt-3 ml-12 text-white ">Level</p>
      </div>
      <img
        className="w-8 h-8 mt-3 mr-4"
        src="https://cdn.discordapp.com/attachments/960537598365958174/961329189246619658/icone_1.png"
        alt="icone du joueur"
      />
    </div>
  );
};

export default BarLogin;
