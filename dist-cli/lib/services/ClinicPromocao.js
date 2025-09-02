"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicPromocaoService = void 0;
const repositories_1 = require("@/lib/repositories");
class ClinicPromocaoService {
    constructor() {
        this.repository = new repositories_1.ClinicPromocaoRepository();
    }
    async createPromocao(data) {
        if (!data.id_clinica || !data.titulo || !data.validade_inicio || !data.validade_fim) {
            throw new Error("Campos obrigatórios para criar a promoção estão faltando.");
        }
        return this.repository.save(data);
    }
    async getPromocoesByClinic(clinicId) {
        return this.repository.findByQuery({ clinica: { id_clinica: clinicId } });
    }
    async updatePromocao(id, data) {
        return this.repository.update(id, data);
    }
    async deletePromocao(id) {
        return this.repository.delete(id);
    }
}
exports.ClinicPromocaoService = ClinicPromocaoService;
//# sourceMappingURL=ClinicPromocao.js.map