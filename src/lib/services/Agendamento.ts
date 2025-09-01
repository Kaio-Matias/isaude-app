import { AgendamentoConsultaRepository, UserRepository, ClinicRepository } from '@/lib/repositories';
import { AgendamentoConsulta } from '@/lib/entities';
import { v4 as uuidv4 } from 'uuid';

export class AgendamentoService {
  private repository: AgendamentoConsultaRepository;
  private userRepository: UserRepository;
  private clinicRepository: ClinicRepository;

  constructor() {
    this.repository = new AgendamentoConsultaRepository();
    this.userRepository = new UserRepository();
    this.clinicRepository = new ClinicRepository();
  }

  async createAgendamento(data: {
    id_usuario_paciente: number;
    id_usuario_profissional: number;
    id_clinica: number;
    data_hora_inicio: Date;
    data_hora_fim: Date;
    tipo_consulta: string;
    motivo: string;
    comentarios?: string;
  }): Promise<AgendamentoConsulta> {

    const paciente = await this.userRepository.findById(data.id_usuario_paciente);
    if (!paciente) throw new Error("Paciente não encontrado.");

    const profissional = await this.userRepository.findById(data.id_usuario_profissional);
    if (!profissional) throw new Error("Profissional não encontrado.");

    const clinica = await this.clinicRepository.findById(data.id_clinica);
    if (!clinica) throw new Error("Clínica não encontrada.");
    
    const agendamentoData = {
        ...data,
        paciente,
        profissional,
        clinica,
        link_sala: `https://meet.jit.si/${uuidv4()}`
    };
    
    // A CORREÇÃO ESTÁ AQUI
    return this.repository.save(agendamentoData as any);
  }
}