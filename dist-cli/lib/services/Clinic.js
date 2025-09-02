"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicService = void 0;
const repositories_1 = require("@/lib/repositories");
const utils_1 = require("@/lib/utils");
class ClinicService {
    constructor() {
        this.repository = new repositories_1.ClinicRepository();
    }
    async createClinic(data) {
        const dataFilter = (0, utils_1.filterProps)(data, [...utils_1.CLINIC_FIELDS]);
        if (!dataFilter.cnpj || !dataFilter.nome_fantasia) {
            throw new Error('CNPJ e Nome Fantasia são campos obrigatórios.');
        }
        return this.repository.save(dataFilter);
    }
    async getClinics({ queries, id }) {
        if (id) {
            const clinic = await this.repository.findById(id);
            if (!clinic)
                throw new Error("Clínica não encontrada");
            return clinic;
        }
        if (queries)
            return this.repository.findByQuery(queries);
        return this.repository.findAll();
    }
    async updateClinic(id, data) {
        const dataFilter = (0, utils_1.filterProps)(data, [...utils_1.CLINIC_FIELDS]);
        return this.repository.update(id, dataFilter);
    }
    async deleteClinic(id) {
        return this.repository.delete(id);
    }
}
exports.ClinicService = ClinicService;
//# sourceMappingURL=Clinic.js.map