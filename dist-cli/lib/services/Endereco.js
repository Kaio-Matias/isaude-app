"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoService = void 0;
const repositories_1 = require("@/lib/repositories");
class EnderecoService {
    constructor() {
        this.repository = new repositories_1.EnderecoRepository();
        this.clinicRepository = new repositories_1.ClinicRepository();
    }
    async addEnderecoToClinic(data) {
        if (!data.id_clinica || !data.cep || !data.logradouro || !data.cidade || !data.estado) {
            throw new Error("Campos obrigatórios para adicionar endereço estão faltando.");
        }
        const clinic = await this.clinicRepository.findById(data.id_clinica);
        if (!clinic) {
            throw new Error("Clínica não encontrada para associar o endereço.");
        }
        const enderecoData = { ...data, clinica: clinic };
        return this.repository.save(enderecoData);
    }
    async getEnderecosByClinic(clinicId) {
        return this.repository.findByQuery({ clinica: { id_clinica: clinicId } });
    }
    async deleteEndereco(id) {
        return this.repository.delete(id);
    }
}
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=Endereco.js.map