import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { Documento } from '@/lib/entities';

export class DocumentoRepository {
  private async getRepo(): Promise<Repository<Documento>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(Documento);
  }

  async save(data: DeepPartial<Documento>): Promise<Documento> {
    const repo = await this.getRepo();
    const documento = repo.create(data);
    return await repo.save(documento);
  }

  async findById(id: number): Promise<Documento | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_documento: id }, relations: ['paciente', 'profissional', 'consulta'] });
  }

  async findByQuery(query: FindOptionsWhere<Documento>): Promise<Documento[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['paciente', 'profissional', 'consulta'] });
  }
  
  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}