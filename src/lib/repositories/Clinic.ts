import { Repository, FindOptionsWhere } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { Clinic } from '@/lib/entities';
import { IClinic } from '@/lib/interfaces';

export class ClinicRepository {
  private async getRepo(): Promise<Repository<Clinic>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(Clinic);
  }

  async save(data: IClinic): Promise<Clinic> {
    const repo = await this.getRepo();
    const clinic = repo.create(data);
    return await repo.save(clinic);
  }

  async findAll(): Promise<Clinic[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
  }

  async findById(id: number): Promise<Clinic | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_clinica: id }, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
  }

  async findByQuery(query: FindOptionsWhere<Clinic>): Promise<Clinic[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
  }
  
  async findByQueryOne(query: FindOptionsWhere<Clinic>): Promise<Clinic | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: query, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
  }

  async update(id: number, data: Partial<IClinic>): Promise<Clinic | null> {
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