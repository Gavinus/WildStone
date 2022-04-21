// import React from "react";
import { useNavigate } from "react-router-dom";

const BarLogin = () => {
  const userName = sessionStorage.user;
  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex justify-between h-14 bg-[url(https://cdn.discordapp.com/attachments/960537598365958174/961183931451981864/unknown.png)]">
      <div className="flex">
        <p className="mt-3 ml-8 text-white ">{userName}</p>
        {/* <p className="mt-3 ml-12 text-white ">Level</p> */}
      </div>
      <input
        type="image"
        className="w-8 h-8 mt-3 mr-4 hover:scale-150"
        src="https://cdn.discordapp.com/attachments/960537598365958174/961329189246619658/icone_1.png"
        alt="icone du joueur"
        onClick={handleClick}
        autoComplete="on"
      />
    </div>
  );
};

export default BarLogin;
