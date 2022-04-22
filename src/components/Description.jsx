import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import descHeroes from "../data/descHeroes";

const Description = () => {
  const { nameClass } = useParams();

  const [heroe, setHeroe] = useState([]);

  useEffect(() => {
    setHeroe(descHeroes.find((descHeroe) => descHeroe.title === nameClass));
  }, [nameClass]);

  return (
    <div className="bg-black">
      <div
        className={`relative flex flex-col items-center min-h-screen justify-center bg-[url(${heroe.image})]`}
      >
        <img
          src={heroe.image}
          className="object-cover w-full h-full mt-0"
          alt="heroe"
        />
        <div className="absolute text-center ">
          <h1 className="text-5xl text-white mt-80">{heroe.title}</h1>
          <h2 className="text-3xl text-orange-600 ">{heroe.subtitle}</h2>
          <p className="ml-5 mr-5 text-center text-white ">{heroe.desc}</p>
        </div>
      </div>

      <h1 className="flex mt-20 ml-16 text-3xl text-white ">
        {heroe.powerHeroique}
      </h1>
      <h1 className="flex mt-5 ml-16 text-xl text-white">{heroe.quote}</h1>

      <div className="flex items-center justify-center">
        <img className="w-1/4 mr-40 " src={heroe.imagePower} alt="power" />
        <div className="flex flex-col text-center">
          <h1 className="mb-6 text-3xl text-orange-600 ">{heroe.powerTitle}</h1>
          <p className="text-white ">{heroe.utilityPower}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
