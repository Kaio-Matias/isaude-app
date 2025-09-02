"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConexaoProfissionalClinicaService = void 0;
const repositories_1 = require("@/lib/repositories");
class ConexaoProfissionalClinicaService {
    constructor() {
        this.repository = new repositories_1.ConexaoProfissionalClinicaRepository();
        this.userRepository = new repositories_1.UserRepository();
        this.clinicRepository = new repositories_1.ClinicRepository();
    }
    async createConexao(data) {
        const profissional = await this.userRepository.findById(data.id_profissional);
        if (!profissional)
            throw new Error("Profissional não encontrado.");
        const clinica = await this.clinicRepository.findById(data.id_clinica);
        if (!clinica)
            throw new Error("Clínica não encontrada.");
        const conexaoData = {
            ...data,
            profissional,
            clinica,
            data_aceite: data.data_aceite === null ? undefined : data.data_aceite,
            mensagem: data.mensagem === null ? undefined : data.mensagem
        };
        return this.repository.save(conexaoData);
    }
    async updateStatusConexao(id, status) {
        const data = { status };
        if (status === 'aceito') {
            data.data_aceite = new Date();
        }
        return this.repository.update(id, data);
    }
}
exports.ConexaoProfissionalClinicaService = ConexaoProfissionalClinicaService;
//# sourceMappingURL=ConexaoProfissionalClinica.js.map