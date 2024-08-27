import React, { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationTable from "./components/ApplicationTable";
import { Application } from "./interfaces/Application";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container mx-auto p-4">
          <h1 className="text-2x1 font-bold mb-4">
            Registro Postulaciones de Trabajo
          </h1>
          <ApplicationForm
            editingApplication={editingApplication}
            setEditingApplication={setEditingApplication}
          />
          <ApplicationTable setEditingApplication={setEditingApplication} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
