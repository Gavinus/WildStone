import Rating from "@mui/material/Rating";
import { useState } from "react";

/* Je créer un sous composant qui contient mon plugin de notation étoile */

const Stars = () => {
  const [value, setValue] = useState();

  /* J'insère les paramètres de mes étoiles  */

  return (
    <div>
      <Rating
        className="p-4 border-4 rounded-lg bg-gradient-to-r from-amber-200 to-orange-300 border-sky-600"
        name="simple-controlled"
        size="large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};
export default Stars;
