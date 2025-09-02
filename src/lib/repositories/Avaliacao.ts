import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { Avaliacao } from '@/lib/entities';

export class AvaliacaoRepository {
  private async getRepo(): Promise<Repository<Avaliacao>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(Avaliacao);
  }

  async save(data: Partial<Avaliacao>): Promise<Avaliacao> {
    const repo = await this.getRepo();
    const avaliacao = repo.create(data);
    return await repo.save(avaliacao);
  }

  async findById(id: number): Promise<Avaliacao | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_avaliacao: id }, relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
  }

  async findAll(): Promise<Avaliacao[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
  }

  async findByQuery(query: FindOptionsWhere<Avaliacao>): Promise<Avaliacao[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
  }

  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}