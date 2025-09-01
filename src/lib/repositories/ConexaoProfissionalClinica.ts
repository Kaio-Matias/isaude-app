import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { ConexaoProfissionalClinica } from '@/lib/entities';

export class ConexaoProfissionalClinicaRepository {
  private async getRepo(): Promise<Repository<ConexaoProfissionalClinica>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(ConexaoProfissionalClinica);
  }

  async save(data: DeepPartial<ConexaoProfissionalClinica>): Promise<ConexaoProfissionalClinica> {
    const repo = await this.getRepo();
    const conexao = repo.create(data);
    return await repo.save(conexao);
  }

  async findById(id: number): Promise<ConexaoProfissionalClinica | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_conexao: id }, relations: ['profissional', 'clinica'] });
  }

  async findByQuery(query: FindOptionsWhere<ConexaoProfissionalClinica>): Promise<ConexaoProfissionalClinica[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['profissional', 'clinica'] });
  }

  async update(id: number, data: Partial<ConexaoProfissionalClinica>): Promise<ConexaoProfissionalClinica | null> {
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