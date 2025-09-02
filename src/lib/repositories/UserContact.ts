import { Repository } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { UsuariosContatos, User, Contato } from '@/lib/entities';

export class UserContactRepository {
  private async getRepo(): Promise<Repository<UsuariosContatos>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(UsuariosContatos);
  }

  async save(data: { usuario: User; contato: Contato }): Promise<UsuariosContatos> {
    const repo = await this.getRepo();
    const userContact = repo.create(data);
    return await repo.save(userContact);
  }

  async findOneByContactAndUser(usuarioId: number, contatoId: number): Promise<UsuariosContatos | null> {
      const repo = await this.getRepo();
      return repo.findOne({
          where: {
              usuario: { id: usuarioId },
              contato: { id: contatoId }
          }
      });
  }

  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}