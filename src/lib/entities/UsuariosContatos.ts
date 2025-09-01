import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  RelationId
} from 'typeorm';
import { User } from './User';
import { Contato } from './Contato';

@Entity("usuarios_contatos")
export class UsuariosContatos {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (usuario) => usuario.contatos)
  @JoinColumn({ name: 'usuario_id' })
  usuario!: User;

  @RelationId((contactUser: UsuariosContatos) => contactUser.usuario)
  usuario_id!: number;

  @ManyToOne(() => Contato, (contato) => contato.usuario)
  @JoinColumn({ name: 'contato_id' })
  contato!: Contato;

  @RelationId((contactUser: UsuariosContatos) => contactUser.contato)
  contato_id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}