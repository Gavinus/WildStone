import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import descHeroes from "../data/descHeroes";
import Heroe from "./Heroe";
import "react-multi-carousel/lib/styles.css";

const Description = () => {
  const { nameClass } = useParams();

  const [heroeInfos, setHeroeInfos] = useState([]);

  const [listClasses, setListClasses] = useState([]);
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
    setHeroeInfos(
      descHeroes.find((descHeroe) => descHeroe.title === nameClass)
    );
    // get all classes
    axios
      .request(options)
      .then((res) => res.data.classes)
      .then((data) => setListClasses(data));
    // find one heroe
  }, [nameClass]);
  // Package du carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="bg-black">
      {heroeInfos && (
        <div className="relative flex flex-col items-center justify-center min-h-screen pt-14">
          {/* Image du héros principal */}
          <img
            src={heroeInfos.image}
            className="object-cover w-full h-full mt-0 "
            alt="heroeInfos"
          />
          {/* Nom du héros */}

          <div className="absolute text-center ">
            <h1
              className="text-5xl text-white mt-80 max-w-prose-sm:text-base"
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
            >
              {heroeInfos.title}
            </h1>
            {/* Sous-titre du héros */}

            <h2
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
              className="text-3xl text-orange-600 max-w-screen-md:text-sm "
            >
              {heroeInfos.subtitle}
            </h2>
            {/* Description du héros */}
            <p
              className="ml-5 mr-5 text-center text-white "
              style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
            >
              {heroeInfos.desc}
            </p>
          </div>
        </div>
      )}
      {/* Pouvoir héroique */}
      {heroeInfos && (
        <div className="flex items-center mt-32 ">
          <div className="m-auto ml-20 ">
            <h1 className="text-3xl text-orange-600 ">
              {heroeInfos.powerHeroique}
            </h1>
            {/* Citation du héros */}
            <h1 className="mt-5 text-xl text-white ">{heroeInfos.quote}</h1>
            {/* Image du Pouvoir héroique */}
            <img className="" src={heroeInfos.imagePower} alt="power" />
          </div>
          {/* Nom du Pouvoir héroique */}
          <div className="flex flex-col w-1/2 text-center ">
            <h1 className="mb-6 text-3xl text-orange-600 ">
              {heroeInfos.powerTitle}
            </h1>
            {/* Utilité du Pouvoir héroique */}
            <p className="text-white ">{heroeInfos.utilityPower}</p>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-56 text-3xl text-orange-600 underline">
        <h1>Autres Classes :</h1>
      </div>
      {/* Impoter le composant carousel */}
      <div className="flex flex-col p-10 mt-20 text-white">
        <Carousel
          swipeable
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={false}
          arrows
          keyBoardControl
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* Filtrer mon tableau listClasses */}
          {listClasses &&
            listClasses
              .filter(
                (classFilter) =>
                  ![
                    "Dream",
                    "Chevalier de la mort",
                    "Neutre",
                    "Whizbang",
                  ].includes(classFilter)
              )

              /* Maper mon tableau listClasses */
              .map((classe, index) => (
                <Heroe key={index} nameClass={classe} location="Description" />
              ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Description;
