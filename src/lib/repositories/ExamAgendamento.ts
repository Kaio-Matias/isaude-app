import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import database from '@/lib/config/database'; // Caminho corrigido
import { ExamAgendamento } from '@/lib/entities';

export class ExamAgendamentoRepository {
  private async getRepo(): Promise<Repository<ExamAgendamento>> {
    const dataSource = await database.getInstance();
    return dataSource.getRepository(ExamAgendamento);
  }

  async save(data: DeepPartial<ExamAgendamento>): Promise<ExamAgendamento> {
    const repo = await this.getRepo();
    const agendamento = repo.create(data);
    return await repo.save(agendamento);
  }

  async findById(id: number): Promise<ExamAgendamento | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id_agendamento: id }, relations: ['paciente', 'exame', 'pagamento'] });
  }

  async findByQuery(query: FindOptionsWhere<ExamAgendamento>): Promise<ExamAgendamento[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['paciente', 'exame', 'pagamento'] });
  }
  
  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}