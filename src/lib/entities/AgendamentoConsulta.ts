import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  RelationId
} from 'typeorm';
import { Clinic } from './Clinic';
import { User } from './User';

@Entity('agendamentos_consultas')
export class AgendamentoConsulta {
  @PrimaryGeneratedColumn()
  id_consulta!: number;

  @ManyToOne(() => User, user => user.agendamentos_paciente)
  @JoinColumn({ name: 'id_usuario_paciente' })
  paciente!: User;

  @RelationId((consulta: AgendamentoConsulta) => consulta.paciente)
  id_usuario_paciente!: number;

  @ManyToOne(() => User, user => user.agendamentos_profissional)
  @JoinColumn({ name: 'id_usuario_profissional' })
  profissional!: User;

  @RelationId((consulta: AgendamentoConsulta) => consulta.profissional)
  id_usuario_profissional!: number;

  @ManyToOne(() => Clinic, clinic => clinic.agendamentos)
  @JoinColumn({ name: 'id_clinica' })
  clinica!: Clinic;

  @RelationId((consulta: AgendamentoConsulta) => consulta.clinica)
  id_clinica!: number;

  @Column('timestamp')
  data_hora_inicio!: Date;

  @Column('timestamp')
  data_hora_fim!: Date;

  @Column({ length: 50 })
  tipo_consulta!: string;

  @Column({ length: 300 })
  motivo!: string;

  @Column({ length: 255, nullable: true })
  link_sala?: string;

  @Column('text', { nullable: true })
  comentarios?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}