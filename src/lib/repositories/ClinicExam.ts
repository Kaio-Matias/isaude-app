import { Repository, FindOptionsWhere } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { ClinicExam } from '@/lib/entities';
import { IClinicExam } from '@/lib/interfaces';

export class ClinicExamRepository {
  private async getRepo(): Promise<Repository<ClinicExam>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(ClinicExam);
  }

  async save(data: Partial<IClinicExam>): Promise<ClinicExam> {
    const repo = await this.getRepo();
    const exam = repo.create(data);
    return await repo.save(exam);
  }

  async findById(id: number): Promise<ClinicExam | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_exame: id }, relations: ['clinica'] });
  }

  async findAll(): Promise<ClinicExam[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['clinica'] });
  }

  async findByQuery(query: FindOptionsWhere<ClinicExam>): Promise<ClinicExam[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['clinica'] });
  }

  async update(id: number, data: Partial<IClinicExam>): Promise<ClinicExam | null> {
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