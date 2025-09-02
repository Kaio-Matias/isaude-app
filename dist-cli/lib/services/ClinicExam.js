"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicExamService = void 0;
const repositories_1 = require("@/lib/repositories");
class ClinicExamService {
    constructor() {
        this.repository = new repositories_1.ClinicExamRepository();
    }
    async createExam(data) {
        if (!data.id_clinica || !data.nome_exame || !data.preco || !data.prazo_resultado) {
            throw new Error("Campos obrigatórios para criar o exame estão faltando.");
        }
        return this.repository.save(data);
    }
    async getExamsByClinic(clinicId) {
        return this.repository.findByQuery({ clinica: { id_clinica: clinicId } });
    }
    async updateExam(id, data) {
        return this.repository.update(id, data);
    }
    async deleteExam(id) {
        return this.repository.delete(id);
    }
}
exports.ClinicExamService = ClinicExamService;
//# sourceMappingURL=ClinicExam.js.map