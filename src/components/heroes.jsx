import { useEffect, useState } from "react";
import axios from "axios";
import Heroe from "./Heroe";

const Heroes = () => {
  const [listClasses, setListClasses] = useState([]);
  console.log(listClasses);
  const options = {
    method: "GET",
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
    headers: {
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "4d914d2fa4msh369949fcb214d78p15f32ajsn6d8461683d7f",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => res.data.classes)
      .then((data) => setListClasses(data));
  }, []);
  return <div>
      
      <div className='flex justify-center'>
            <img className=' h-28'src="./images/logo_texture.png" alt="logo" />
            </div>
      {listClasses.map((nameClass) => <Heroe nameClass={nameClass}/>)} 
  </div>;
};

export default Heroes;
