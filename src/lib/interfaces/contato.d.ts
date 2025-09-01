import { IUser } from './user';

export interface IContato {
  id?: number;
  tipo_contato: number;
  valor: string;
  is_principal: boolean;
  dt_criacao?: Date;
  id_usuario: number;
  dt_inativacao?: Date;
  updated_at?: Date;
  usuario?: IUser;
}
