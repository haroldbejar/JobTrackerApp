export interface Application {
  id: string;
  company: string;
  position: string;
  skills: string;
  date: string;
  status: ApplicationStatus;
}

export type ApplicationStatus =
  | "Enviada"
  | "Contestada"
  | "Entrevista Inicial"
  | "Proceso de Pruebas"
  | "Entrevista Técnica"
  | "Otras Técnica"
  | "Finalista";
