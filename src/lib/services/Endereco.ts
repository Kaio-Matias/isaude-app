import { EnderecoRepository, ClinicRepository } from '@/lib/repositories';
import { IEndereco } from '@/lib/interfaces';
import { Endereco } from '@/lib/entities';

export class EnderecoService {
  private repository: EnderecoRepository;
  private clinicRepository: ClinicRepository;

  constructor() {
    this.repository = new EnderecoRepository();
    this.clinicRepository = new ClinicRepository();
  }

  async addEnderecoToClinic(data: IEndereco): Promise<Endereco> {
    if (!data.id_clinica || !data.cep || !data.logradouro || !data.cidade || !data.estado) {
      throw new Error("Campos obrigatórios para adicionar endereço estão faltando.");
    }

    // A CORREÇÃO ESTÁ AQUI
    const clinic = await this.clinicRepository.findById(data.id_clinica);
    if (!clinic) {
      throw new Error("Clínica não encontrada para associar o endereço.");
    }
    
    const enderecoData = { ...data, clinic };
    
    // A CORREÇÃO ESTÁ AQUI
    return this.repository.save(enderecoData as Partial<Endereco>);
  }

  async deleteEndereco(id: number): Promise<boolean> {
      return this.repository.delete(id);
  }
}