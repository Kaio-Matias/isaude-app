import { DocumentoRepository } from '@/lib/repositories';
import { IDocumento } from '@/lib/interfaces';
import { Documento } from '@/lib/entities';

export class DocumentoService {
  private repository: DocumentoRepository;

  constructor() {
    this.repository = new DocumentoRepository();
  }

  async createDocumento(data: IDocumento): Promise<Documento> {
    if (!data.tipo || !data.url_arquivo || !data.paciente_id || !data.consulta_id) {
        throw new Error("Campos obrigatórios para criar o documento estão faltando.");
    }
    // Aqui você adicionaria validações para ver se paciente, profissional e consulta existem
    return this.repository.save(data as Partial<Documento>);
  }

  async getDocumentosByConsulta(consultaId: number): Promise<Documento[]> {
    return this.repository.findByQuery({ consulta: { id_consulta: consultaId } });
  }
}