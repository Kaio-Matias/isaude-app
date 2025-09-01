import { IUser } from './user';
import { IClinic } from './clinic';

export interface IAgendamentoConsulta {
  id_consulta?: number;
  paciente: IUser;
  profissional: IUser;
  clinica: IClinic;
  data_hora_inicio: Date;
  data_hora_fim: Date;
  tipo_consulta: string;
  motivo: string;
  link_sala?: string;
  comentarios?: string;
  created_at?: Date;
  updated_at?: Date;
}