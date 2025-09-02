import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { Endereco } from '@/lib/entities';

export class EnderecoRepository {
  private async getRepo(): Promise<Repository<Endereco>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(Endereco);
  }

  async save(data: DeepPartial<Endereco>): Promise<Endereco> {
    const repo = await this.getRepo();
    const endereco = repo.create(data);
    return await repo.save(endereco);
  }
  
  async findByQuery(query: FindOptionsWhere<Endereco>): Promise<Endereco[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['clinica'] });
  }

  async delete(id: number): Promise<boolean> {
      const repo = await this.getRepo();
      const result = await repo.delete(id);
      return result.affected !== 0;
  }
}