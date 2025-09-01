import { ClinicExamRepository } from '@/lib/repositories';
import { IClinicExam } from '@/lib/interfaces';
import { ClinicExam } from '@/lib/entities';

export class ClinicExamService {
  private repository: ClinicExamRepository;

  constructor() {
    this.repository = new ClinicExamRepository();
  }

  async createExam(data: IClinicExam): Promise<ClinicExam> {
    if (!data.id_clinica || !data.nome_exame || !data.preco || !data.prazo_resultado) {
      throw new Error("Campos obrigatórios para criar o exame estão faltando.");
    }
    return this.repository.save(data);
  }

  async getExamsByClinic(clinicId: number): Promise<ClinicExam[]> {
    return this.repository.findByQuery({ clinica: { id_clinica: clinicId } });
  }
  
  async updateExam(id: number, data: Partial<IClinicExam>): Promise<ClinicExam | null> {
    return this.repository.update(id, data);
  }

  async deleteExam(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}