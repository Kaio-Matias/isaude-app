import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Contato } from './Contato';
import { UsuariosContatos } from './UsuariosContatos';
import { AgendamentoConsulta } from './AgendamentoConsulta';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id!: number;

  @Column({ length: 255 })
  nome!: string;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ type: 'text', select: false })
  senha_hash!: string;

  @Column({ length: 50 })
  tipo_usuario!: string;

  @Column({ length: 20, nullable: true })
  telefone?: string;

  @Column({ length: 10, nullable: true })
  genero?: string;

  @Column({ type: 'date', nullable: true })
  dt_nascimento?: Date;

  @Column({ length: 2, nullable: true })
  estado?: string;

  @Column({ default: true })
  is_active!: boolean;

  @Column({ length: 14, nullable: true, unique: true })
  cpfcnpj?: string;

  @Column({ length: 255, nullable: true })
  ft_perfil?: string;

  @Column({ length: 255, nullable: true })
  ft_capa?: string;

  @Column({ default: false })
  perfil_privado!: boolean;

  @Column({ length: 500, nullable: true })
  descricao_bio?: string;

  @Column({ default: false })
  is_verificado!: boolean;

  @OneToMany(() => Contato, (contacts) => contacts.usuario)
  contatos!: Contato[];

  @OneToMany(() => UsuariosContatos, (uc) => uc.contato)
  contatos_de_outros!: UsuariosContatos[];

  @OneToMany(() => AgendamentoConsulta, (agendamento) => agendamento.paciente)
  agendamentos_paciente!: AgendamentoConsulta[];

  @OneToMany(() => AgendamentoConsulta, (agendamento) => agendamento.profissional)
  agendamentos_profissional!: AgendamentoConsulta[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}