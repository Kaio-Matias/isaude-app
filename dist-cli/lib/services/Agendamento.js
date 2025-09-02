"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoService = void 0;
const repositories_1 = require("@/lib/repositories");
const uuid_1 = require("uuid");
class AgendamentoService {
    constructor() {
        this.repository = new repositories_1.AgendamentoConsultaRepository();
        this.userRepository = new repositories_1.UserRepository();
        this.clinicRepository = new repositories_1.ClinicRepository();
    }
    async createAgendamento(data) {
        const paciente = await this.userRepository.findById(data.id_usuario_paciente);
        if (!paciente)
            throw new Error("Paciente não encontrado.");
        const profissional = await this.userRepository.findById(data.id_usuario_profissional);
        if (!profissional)
            throw new Error("Profissional não encontrado.");
        const clinica = await this.clinicRepository.findById(data.id_clinica);
        if (!clinica)
            throw new Error("Clínica não encontrada.");
        const agendamentoData = {
            ...data,
            paciente,
            profissional,
            clinica,
            link_sala: `https://meet.jit.si/${(0, uuid_1.v4)()}`
        };
        // A CORREÇÃO ESTÁ AQUI
        return this.repository.save(agendamentoData);
    }
}
exports.AgendamentoService = AgendamentoService;
//# sourceMappingURL=Agendamento.js.map