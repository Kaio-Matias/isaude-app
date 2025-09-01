import { Repository, FindOptionsWhere } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { ExamPayment } from '@/lib/entities';
import { IExamPayment } from '@/lib/interfaces';

export class ExamPaymentRepository {
  private async getRepo(): Promise<Repository<ExamPayment>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(ExamPayment);
  }

  async save(data: Partial<IExamPayment>): Promise<ExamPayment> {
    const repo = await this.getRepo();
    const payment = repo.create(data);
    return await repo.save(payment);
  }

  async findById(id: number): Promise<ExamPayment | null> {
    const repo = await this.getRepo();
    return await repo.findOneBy({ id_pagamento: id });
  }
  
  async findByQuery(query: FindOptionsWhere<ExamPayment>): Promise<ExamPayment[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query });
  }
  
  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}

export const examPaymentRepository = new ExamPaymentRepository();