import { ExamAgendamentoRepository } from '@/lib/repositories';
import { IExamAgendamento } from '@/lib/interfaces';
import { ExamAgendamento } from '@/lib/entities';

export class ExamAgendamentoService {
  private repository: ExamAgendamentoRepository;

  constructor() {
    this.repository = new ExamAgendamentoRepository();
  }

  async createAgendamento(data: IExamAgendamento): Promise<ExamAgendamento> {
    // Adicionar validações de existência de paciente, exame, etc.
    if (!data.id_usuario_paciente || !data.id_exame || !data.data_hora) {
        throw new Error("Campos obrigatórios para o agendamento de exame estão faltando.");
    }
    return this.repository.save(data as Partial<ExamAgendamento>);
  }
}