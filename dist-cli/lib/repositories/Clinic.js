"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class ClinicRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.Clinic);
    }
    async save(data) {
        const repo = await this.getRepo();
        const clinic = repo.create(data);
        return await repo.save(clinic);
    }
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_clinica: id }, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
    }
    async findByQueryOne(query) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: query, relations: ['exames', 'promocoes', 'agendamentos', 'conexoes', 'enderecos'] });
    }
    async update(id, data) {
        const repo = await this.getRepo();
        await repo.update(id, data);
        return this.findById(id);
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.ClinicRepository = ClinicRepository;
//# sourceMappingURL=Clinic.js.map