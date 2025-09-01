import { ClinicPromocaoRepository } from '@/lib/repositories';
import { IClinicPromotion } from '@/lib/interfaces';
import { ClinicPromotion } from '@/lib/entities';

export class ClinicPromocaoService {
  private repository: ClinicPromocaoRepository;

  constructor() {
    this.repository = new ClinicPromocaoRepository();
  }

  async createPromocao(data: IClinicPromotion): Promise<ClinicPromotion> {
    if (!data.id_clinica || !data.titulo || !data.validade_inicio || !data.validade_fim) {
      throw new Error("Campos obrigatórios para criar a promoção estão faltando.");
    }
    return this.repository.save(data);
  }

  async getPromocoesByClinic(clinicId: number): Promise<ClinicPromotion[]> {
    return this.repository.findByQuery({ clinica: { id_clinica: clinicId } });
  }
  
  async updatePromocao(id: number, data: Partial<IClinicPromotion>): Promise<ClinicPromotion | null> {
    return this.repository.update(id, data);
  }

  async deletePromocao(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}