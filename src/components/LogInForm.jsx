import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // inititialisation du stockage username
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Création d'un hook pour la navigation avec les boutons
  const navigate = useNavigate();

  function handleInputChange(e) {
    setUserName(e.target.value);
  }

  function clickChange() {
    sessionStorage.setItem("user", userName);
    return userName && password && navigate("/home/rules");
  }

  function clickInvit() {
    sessionStorage.setItem("user", "Invité");
    return navigate("/home/rules");
  }

  return (
    <form className="p-4 border-2 border-blue-500 rounded bg-black/25 w-72">
      <div className="py-8 ">
        <input
          type="text"
          required
          placeholder="Nom d'utilisateur *"
          onChange={handleInputChange}
          className="w-full p-3 text-center border-2 border-blue-500 rounded hover:border-yellow-400"
        />
      </div>

      <div>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe *"
          className="w-full p-3 text-center border-2 border-blue-500 rounded hover:border-yellow-400"
        />
      </div>

      <div className="my-8">
        <label htmlFor="check" className="ml-2 text-white">
          <input
            type="checkbox"
            id="check"
            name="check"
            className="border-2 border-blue-500 rounded hover:border-yellow-400"
          />
          <span className="mr-1.5" />
          Rester connecté
        </label>
      </div>

      <div className="flex justify-around">
        <button
          type="submit"
          onClick={clickChange}
          className="h-12 p-1 text-sm text-white uppercase bg-blue-500 rounded-lg w-28 hover:text-yellow-400"
        >
          Se connecter
        </button>

        <button
          type="submit"
          className="h-12 p-1 ml-5 text-sm text-white uppercase border-2 border-blue-500 rounded-lg w-28 hover:text-yellow-400 "
          onClick={clickInvit}
        >
          Invité
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
