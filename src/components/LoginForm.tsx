import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { login } from "../redux/slices/AuthSlice";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ username }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de Usuario"
        className="block w-full p-2 border mb-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
