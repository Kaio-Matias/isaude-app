import { ConexaoProfissionalClinicaRepository, UserRepository, ClinicRepository } from '@/lib/repositories';
import { IConexaoProfissionalClinica } from '@/lib/interfaces';
import { ConexaoProfissionalClinica } from '@/lib/entities';

export class ConexaoProfissionalClinicaService {
  private repository: ConexaoProfissionalClinicaRepository;
  private userRepository: UserRepository;
  private clinicRepository: ClinicRepository;

  constructor() {
    this.repository = new ConexaoProfissionalClinicaRepository();
    this.userRepository = new UserRepository();
    this.clinicRepository = new ClinicRepository();
  }

  async createConexao(data: IConexaoProfissionalClinica): Promise<ConexaoProfissionalClinica> {
    const profissional = await this.userRepository.findById(data.id_profissional);
    if (!profissional) throw new Error("Profissional não encontrado.");

    const clinica = await this.clinicRepository.findById(data.id_clinica);
    if (!clinica) throw new Error("Clínica não encontrada.");

    const conexaoData = { 
      ...data, 
      profissional, 
      clinica, 
      data_aceite: data.data_aceite === null ? undefined : data.data_aceite,
      mensagem: data.mensagem === null ? undefined : data.mensagem
    };
    return this.repository.save(conexaoData);
  }

  async updateStatusConexao(id: number, status: 'aceito' | 'rejeitado'): Promise<ConexaoProfissionalClinica | null> {
    const data: Partial<ConexaoProfissionalClinica> = { status };
    if (status === 'aceito') {
      data.data_aceite = new Date();
    }
    return this.repository.update(id, data);
  }
}