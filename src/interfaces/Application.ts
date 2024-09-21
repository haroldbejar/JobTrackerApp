export interface Application {
  id: string;
  company: string;
  position: string;
  skills: string;
  date: string;
  status: ApplicationStatus;
  description: string;
}

export type ApplicationStatus =
  | "Enviada"
  | "Contestada"
  | "Entrevista Inicial"
  | "Proceso de Pruebas"
  | "Entrevista Técnica"
  | "Otras Entrevistas"
  | "Finalista"
  | "Cancelada";

export const applicationStatuses: ApplicationStatus[] = [
  "Enviada",
  "Contestada",
  "Entrevista Inicial",
  "Proceso de Pruebas",
  "Entrevista Técnica",
  "Otras Entrevistas",
  "Finalista",
  "Cancelada",
];
