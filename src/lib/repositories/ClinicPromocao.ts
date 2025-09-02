import { Repository, FindOptionsWhere } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { ClinicPromotion } from '@/lib/entities';
import { IClinicPromotion } from '@/lib/interfaces';

export class ClinicPromocaoRepository {
  private async getRepo(): Promise<Repository<ClinicPromotion>> {
    const dataSource = await database.getInstance();  
    return dataSource.getRepository(ClinicPromotion);
  }

  async save(data: Partial<IClinicPromotion>): Promise<ClinicPromotion> {
    const repo = await this.getRepo();
    const promotion = repo.create(data);
    return await repo.save(promotion);
  }

  async findById(id: number): Promise<ClinicPromotion | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_promocao: id }, relations: ['clinica'] });
  }

  async findAll(): Promise<ClinicPromotion[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['clinica'] });
  }

   async findByQuery(query: FindOptionsWhere<ClinicPromotion>): Promise<ClinicPromotion[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['clinica'] });
  }

  async update(id: number, data: Partial<IClinicPromotion>): Promise<ClinicPromotion | null> {
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