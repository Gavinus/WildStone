import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";

const Heros = () => {
  const [classList, setClassList] = useState([]);

  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
    params: { locale: "frFR" },
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "4d914d2fa4msh369949fcb214d78p15f32ajsn6d8461683d7f",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data.classes)
      .then((data) => setClassList(data));
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-10 pt-24 background ">
      {classList
        .filter(
          (nameClass) =>
            !["Dream", "Chevalier de la mort", "Neutre", "Whizbang"].includes(
              nameClass
            )
        )
        .map((nameClass, index) => (
          <Hero key={index} nameClass={nameClass} />
        ))}
    </div>
  );
};

export default Heros;
