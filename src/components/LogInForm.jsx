const LoginForm = () => {
  return (
    <form className="p-4 border-2 border-blue-500 rounded bg-black/25 w-72">
      <div className="py-8 ">
        <input
          type="email"
          placeholder="Adresse Email"
          className="w-full p-3 text-center border-2 border-blue-500 rounded hover:border-yellow-400"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
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
          Rester connecté
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="p-1 text-sm text-white uppercase bg-blue-500 rounded-lg w-28 hover:text-yellow-400"
        >
          Se connecter
        </button>

        <button
          type="submit"
          className="p-1 text-sm text-white uppercase border-2 border-blue-500 rounded-lg w-28 hover:text-yellow-400 ml-[26px]"
        >
          Invité
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
