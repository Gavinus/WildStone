import React from "react";

const Heroe = ({ nameClass }) => {
  return (
    <div className="flex flex-col items-center w-72">
      <img
        className="object-cover h-56"
        src={`./images/classes/${nameClass}.png`}
        alt="image_hero"
      />
      <h2>{nameClass}</h2>
    </div>
  );
};

export default Heroe;
