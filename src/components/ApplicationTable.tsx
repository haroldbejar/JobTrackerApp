import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { deleteApplication } from "../redux/slices/ApplicationsSlices";
import { Application } from "../interfaces/Application";

interface ApplicationTableProps {
  setEditingApplication: React.Dispatch<
    React.SetStateAction<Application | null>
  >;
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  setEditingApplication,
}) => {
  const applications = useAppSelector(
    (state) => state.applications.applications
  );
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-4">
        Lista de Aplicaciones Laborales
      </h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Empresa</th>
            <th className="py-2 px-4 border">Cargo</th>
            <th className="py-2 px-4 border">Habilidades</th>
            <th className="py-2 px-4 border">Fecha</th>
            <th className="py-2 px-4 border">Estado</th>
            <th className="py-2 px-4 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="py-2 px-4 border">{application.company}</td>
              <td className="py-2 px-4 border">{application.position}</td>
              <td className="py-2 px-4 border">{application.skills}</td>
              <td className="py-2 px-4 border">{application.date}</td>
              <td className="py-2 px-4 border">{application.status}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => setEditingApplication(application)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(deleteApplication(application.id))}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
