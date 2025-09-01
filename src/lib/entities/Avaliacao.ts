import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { AgendamentoConsulta } from './AgendamentoConsulta';
import { Documento } from './Documento';
import { Clinic } from './Clinic';
import { User } from './User';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id_avaliacao!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'paciente_cpf', referencedColumnName: 'cpfcnpj' })
  paciente!: User;

  @RelationId((avaliacao: Avaliacao) => avaliacao.paciente)
  paciente_cpf!: string;

  @ManyToOne(() => AgendamentoConsulta, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'consulta_id' })
  consulta!: AgendamentoConsulta;

  @RelationId((avaliacao: Avaliacao) => avaliacao.consulta)
  consulta_id!: number;

  @ManyToOne(() => Documento, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'exame_id' })
  exame!: Documento;

  @RelationId((avaliacao: Avaliacao) => avaliacao.exame)
  exame_id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'profissional_cpf', referencedColumnName: 'cpfcnpj' })
  profissional!: User;

  @RelationId((avaliacao: Avaliacao) => avaliacao.profissional)
  profissional_cpf!: string;

  @ManyToOne(() => Clinic, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'unidade_id', referencedColumnName: 'cnpj' })
  unidade!: Clinic;

  @RelationId((avaliacao: Avaliacao) => avaliacao.unidade)
  unidade_id!: string;

  @Column({ type: 'int' })
  nota!: number;

  @Column({ type: 'text', nullable: true })
  comentario?: string;

  @CreateDateColumn({ name: 'dt_avaliacao' })
  dt_avaliacao!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}