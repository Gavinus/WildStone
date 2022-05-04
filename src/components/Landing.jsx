// page de landing page chargement image de la page
import React, { useState } from "react";
import LoginForm from "./LogInForm";

const Landing = () => {
  const [Dorsleft, setDorsLeft] = useState(false);
  const [DorsRight, setDorsRight] = useState(false);

  const handleChange = () => {
    setDorsLeft(!Dorsleft);
    setDorsRight(!DorsRight);
  };
  sessionStorage.clear();

  return (
    <div className="bg-no-repeat bg-center h-screen bg-[url('/assets/image-fond-landing-page.png')]">
      <div className="flex flex-wrap content-center justify-center h-screen ...">
        <div className="md:flex md:items-center">
          <img
            className={`cursor-pointer md:w-48 lg:w-80 xl:w-96 ${Dorsleft ? "-translate-x-5 " : ""
              } transition ease-out duration-500`}
            src="/assets/logo_texture_porte_gauche.png"
            alt="logoLanding"
            aria-hidden
            onClick={() => handleChange()}
            onKeyPress={() => handleChange()}
          />
        </div>
        <div
          className={`flex items-center overflow-hidden delay-150 after:tranform-none transition-all duration-500 ease-in-out before:-transform-none ${Dorsleft && DorsRight ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
        >
          <LoginForm />
        </div>
        <div className="md:flex md:items-center">
          <img
            className={` cursor-pointer md:w-48 lg:w-80 xl:w-96 ${Dorsleft ? "translate-x-5" : ""
              } transition ease-out duration-500`}
            src="/assets/logo-texture-porte-droite.png"
            alt="landing"
            aria-hidden
            onKeyPress={handleChange}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
