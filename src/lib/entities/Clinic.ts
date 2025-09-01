import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ClinicExam } from './ClinicExam';
import { ClinicPromotion } from './ClinicPromocao';
import { AgendamentoConsulta } from './AgendamentoConsulta';
import { ConexaoProfissionalClinica } from './ConexaoProfissionalClinica';
import { Endereco } from './Endereco';

@Entity('clinics')
export class Clinic {
  @PrimaryGeneratedColumn()
  id_clinica!: number;

  @Column({ length: 14, unique: true })
  cnpj!: string;

  @Column({ length: 255 })
  nome_fantasia!: string;

  @Column({ length: 20, nullable: true })
  telefone?: string;

  @Column({ length: 255, nullable: true, unique: true })
  email?: string;

  @Column({ length: 100 })
  cidade!: string;

  @Column({ length: 2 })
  estado!: string;

  @Column('text', { nullable: true })
  especialidades?: string;

  @Column('text', { nullable: true })
  infraestrutura?: string;

  @OneToMany(() => ClinicExam, (exame: ClinicExam) => exame.clinica)
  exames!: ClinicExam[];

  @OneToMany(() => ClinicPromotion, (promo: ClinicPromotion) => promo.clinica)
  promocoes!: ClinicPromotion[];

  @OneToMany(() => AgendamentoConsulta, (ag: AgendamentoConsulta) => ag.clinica)
  agendamentos!: AgendamentoConsulta[];

  @OneToMany(() => ConexaoProfissionalClinica, (conexao: ConexaoProfissionalClinica) => conexao.clinica)
  conexoes!: ConexaoProfissionalClinica[];

  @OneToMany(() => Endereco, (endereco: Endereco) => endereco.clinica)
  enderecos!: Endereco[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}