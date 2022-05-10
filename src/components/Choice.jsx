import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="flex h-screen overflow-hidden bp3:flex-col bp3:w-full">
      <div className="relative w-1/2 h-full bp3:w-full bp3:h-1/2">
        <Link to="/home/choice/battleground">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.discordapp.com/attachments/960537598365958174/971319902843596810/Capture_decran_2022-05-04_a_09.56.29.png"
            alt="image_choicebtg"
          />
          <h1
            className="absolute transition flex justify-center items-center duration-300 ease-in-out backdrop-brightness-50 hover:backdrop-filter-none w-full h-full text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[2rem] bp2:text-[1.5rem] bp3:text-[1rem]"
            style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
          >
            Champ de Bataille
          </h1>
        </Link>
      </div>

      <div className="relative w-1/2 bp3:w-full bp3:h-1/2">
        <Link to="/home/choice/memory">
          <img
            className="object-cover w-full h-full "
            src="https://cdn.discordapp.com/attachments/960537598365958174/971327122939478026/Capture_decran_2022-05-04_a_10.26.44.png"
            alt="image_memo"
          />
          <h1
            className="absolute transition flex justify-center items-center duration-300 ease-in-out backdrop-brightness-50 hover:backdrop-filter-none w-full h-full text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[2rem] bp2:text-[1.5rem] bp3:text-[1rem]"
            style={{ textShadow: "3px 3px 2px rgb(0 0 0)" }}
          >
            Memory
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Choice;
