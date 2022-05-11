import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import descHeros from "../data/descHeros";
import Hero from "./Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Description = () => {
  const { nameClass } = useParams();

  const [heroInfos, setHeroInfos] = useState([]);

  const [classList, setClassList] = useState([]);
  // Appel de l'API
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
    setHeroInfos(descHeros.find((descHero) => descHero.title === nameClass));
    // get all classes
    axios
      .request(options)
      .then((res) => res.data.classes)
      .then((data) => setClassList(data));
    // find one heroe
  }, [nameClass]);
  // Package du carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[url('../../public/assets/fondNoir.jpg')] bg-cover">
      {heroInfos && (
        <div className="relative flex flex-col items-center justify-center min-h-screen pt-14">
          {/* Image du héros principal */}
          <img
            src={heroInfos.image}
            className={`object-cover h-[100vh] w-[100vw] ${
              heroInfos.id === 0 || heroInfos.id === 6 ? "bp2:object-right" : ""
            } `}
            alt="heroeInfos"
          />
          {/* Nom du héros */}

          <div className="absolute text-center ">
            <h1
              className="text-5xl text-white mt-80 max-w-prose-sm:text-base bp3:mt-44"
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
            >
              {heroInfos.title}
            </h1>
            {/* Sous-titre du héros */}

            <h2
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
              className="text-3xl text-orange-600 max-w-screen-md:text-sm "
            >
              {heroInfos.subtitle}
            </h2>
            {/* Description du héros */}
            <p
              className=" m-auto text-center text-white w-[70%] text-[1.25rem]"
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
            >
              {heroInfos.desc}
            </p>
          </div>
        </div>
      )}
      {/* Pouvoir héroique */}
      {heroInfos && (
        <div className="flex flex-col items-center justify-start gap-40 mt-32 ">
          <div className="flex flex-col items-center justify-start">
            <h1 className="text-[3rem] text-orange-600 text-center bp3:text-[2.5rem]">
              {heroInfos.powerHeroique}
            </h1>
            {/* Citation du héros */}
            <h1 className="mt-5 text-[1.5rem] text-white text-center bp3:text-[1rem] ">
              {heroInfos.quote}
            </h1>
            {/* Image du Pouvoir héroique */}
          </div>
          {/* Nom du Pouvoir héroique */}
          <div className="flex flex-row items-center justify-around text-center bp2:flex-col">
            <img className="" src={heroInfos.imagePower} alt="power" />
            <div className="flex flex-col items-center w-[50%]">
              <h1 className="mb-6 text-[3rem]  text-orange-600 bp3:text-[2.5rem]">
                {heroInfos.powerTitle}
              </h1>
              {/* Utilité du Pouvoir héroique */}
              <p className="text-white text-[1.5rem] bp3:text-[1rem] ">
                {heroInfos.utilityPower}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-56 text-3xl text-orange-600 underline">
        <h1>Autres Classes :</h1>
      </div>
      <div className="flex flex-col p-10 mt-20 text-white">
        <Slider {...settings}>
          {classList &&
            classList
              .filter(
                (classFilter) =>
                  ![
                    "Dream",
                    "Chevalier de la mort",
                    "Neutre",
                    "Whizbang",
                  ].includes(classFilter)
              )

              .map((classe, index) => (
                <Hero key={index} nameClass={classe} location="Description" />
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Description;
