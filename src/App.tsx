import React, { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationTable from "./components/ApplicationTable";
import { Application } from "./interfaces/Application";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectAuth, logout } from "./redux/slices/AuthSlice";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4">
        Registro Postulaciones de Trabajo
      </h1>
      {isAuthenticated ? (
        <>
          <p className="mb-4">Bienvenido, {username}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Cerrar Sesión
          </button>
          <ApplicationForm
            editingApplication={editingApplication}
            setEditingApplication={setEditingApplication}
          />
          <ApplicationTable setEditingApplication={setEditingApplication} />
        </>
      ) : showRegister ? (
        <RegisterForm />
      ) : (
        <>
          <LoginForm />
          <p className="mt-4">
            ¿No tienes una cuenta?{" "}
            <button
              onClick={() => setShowRegister(true)}
              className="text-blue-500 hover:underline"
            >
              Registrarse
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
