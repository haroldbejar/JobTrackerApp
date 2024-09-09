import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { login } from "../redux/slices/AuthSlice";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      dispatch(login({ username, password }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-2">
          Nombre de Usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de Usuario"
          className="block w-full p-2 border mb-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="block w-full p-2 border mb-2"
          required
        />
      </div>
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
