import { AvaliacaoRepository } from '@/lib/repositories';
import { IAvaliacao } from '@/lib/interfaces';
import { Avaliacao } from '@/lib/entities';

export class AvaliacaoService {
  private repository: AvaliacaoRepository;

  constructor() {
    this.repository = new AvaliacaoRepository();
  }

  async createAvaliacao(data: IAvaliacao): Promise<Avaliacao> {
    if (!data.nota || !data.paciente_id) {
        throw new Error("Nota e ID do paciente são obrigatórios.");
    }
    // A CORREÇÃO ESTÁ AQUI
    return this.repository.save(data as Partial<Avaliacao>);
  }
}