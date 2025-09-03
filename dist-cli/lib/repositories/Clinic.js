"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class ClinicRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
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