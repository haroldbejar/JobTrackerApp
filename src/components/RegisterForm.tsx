import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { register } from "../redux/slices/AuthSlice";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    dispatch(register({ username, password }));
    alert("Usuario registrado exitosamente!");
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro de Usuario</h2>

      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-2">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-2"
        >
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full p-2 border"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;
