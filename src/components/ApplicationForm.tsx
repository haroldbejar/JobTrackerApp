import React, { useEffect, useState } from "react";
import { Application, applicationStatuses } from "../interfaces/Application";
import { useAppDispatch } from "../hooks/hooks";
import {
  addApplication,
  updateApplication,
} from "../redux/slices/ApplicationsSlices";

interface ApplicationFormProps {
  editingApplication: Application | null;
  setEditingApplication: React.Dispatch<
    React.SetStateAction<Application | null>
  >;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  editingApplication,
  setEditingApplication,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Application>({
    id: "",
    company: "",
    position: "",
    skills: "",
    date: "",
    status: "Enviada",
    description: "",
  });

  useEffect(() => {
    if (editingApplication) {
      setFormData(editingApplication);
    }
  }, [editingApplication]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingApplication) {
      dispatch(updateApplication(formData));
      setEditingApplication(null);
    } else {
      dispatch(addApplication({ ...formData, id: Date.now().toString() }));
    }
    setFormData({
      id: "",
      company: "",
      position: "",
      skills: "",
      date: "",
      status: "Enviada",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">
        {editingApplication ? "Editar Aplicación" : "Nueva Aplicación"}
      </h2>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Nombre de la Empresa"
        className="block w-full p-2 border mb-2"
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Cargo"
        className="block w-full p-2 border mb-2"
      />
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Habilidades"
        className="block w-full p-2 border mb-2"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="block w-full p-2 border mb-2"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="block w-full p-2 border mb-2"
      >
        {applicationStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="block w-full p-2 border mb-2"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editingApplication ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default ApplicationForm;
