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
import { User } from './User';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  id_documento!: number;

  @Column({ length: 50 })
  tipo!: string;

  @Column({ length: 255 })
  url_arquivo!: string;

  @CreateDateColumn()
  dt_upload!: Date;

  @Column()
  criado_na_plataforma!: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'paciente_id' })
  paciente!: User;

  @RelationId((doc: Documento) => doc.paciente)
  paciente_id!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'profissional_id' })
  profissional!: User;

  @RelationId((doc: Documento) => doc.profissional)
  profissional_id!: number;

  @ManyToOne(() => AgendamentoConsulta)
  @JoinColumn({ name: 'consulta_id' })
  consulta!: AgendamentoConsulta;

  @RelationId((doc: Documento) => doc.consulta)
  consulta_id!: number;

  @Column({ default: true })
  visivel_paciente!: boolean;

  @Column('text', { nullable: true })
  observacoes?: string;

  @UpdateDateColumn()
  updated_at!: Date;
}