import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { AgendamentoConsulta } from '@/lib/entities';

export class AgendamentoConsultaRepository {
  private async getRepo(): Promise<Repository<AgendamentoConsulta>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(AgendamentoConsulta);
  }

  async save(data: DeepPartial<AgendamentoConsulta>): Promise<AgendamentoConsulta> {
    const repo = await this.getRepo();
    const agendamento = repo.create(data);
    return await repo.save(agendamento);
  }

  // A CORREÇÃO ESTÁ AQUI. O RETORNO É Promise<AgendamentoConsulta[]>
  async findAll(): Promise<AgendamentoConsulta[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['clinica', 'paciente', 'profissional'] });
  }

  async findById(id: number): Promise<AgendamentoConsulta | null> {
    const repo = await this.getRepo();
    return await repo.findOne({
      where: { id_consulta: id },
      relations: ['clinica', 'paciente', 'profissional'],
    });
  }
}