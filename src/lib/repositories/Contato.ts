import { Repository, FindOptionsWhere } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { Contato, User } from '@/lib/entities';
import { IContato } from '@/lib/interfaces';

export class ContatoRepository {
  private async getRepo(): Promise<Repository<Contato>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(Contato);
  }

  async save(data: IContato, user: User): Promise<Contato> {
    const repo = await this.getRepo();
    const newContact = repo.create({ ...data, usuario: user });
    return await repo.save(newContact);
  }

  async findAll(): Promise<Contato[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['usuario'] });
  }
  
  async findById(id: number): Promise<Contato | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id }, relations: ['usuario'] });
  }
  
  async findByQuery(query: FindOptionsWhere<Contato>): Promise<Contato[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['usuario'] });
  }

  async findByQueryOne(query: FindOptionsWhere<Contato>): Promise<Contato | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: query, relations: ['usuario'] });
  }

  async update(id: number, data: Partial<IContato>): Promise<Contato | null> {
    const repo = await this.getRepo();
    await repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}