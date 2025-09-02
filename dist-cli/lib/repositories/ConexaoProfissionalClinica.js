"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConexaoProfissionalClinicaRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class ConexaoProfissionalClinicaRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.ConexaoProfissionalClinica);
    }
    async save(data) {
        const repo = await this.getRepo();
        const conexao = repo.create(data);
        return await repo.save(conexao);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_conexao: id }, relations: ['profissional', 'clinica'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['profissional', 'clinica'] });
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
exports.ConexaoProfissionalClinicaRepository = ConexaoProfissionalClinicaRepository;
//# sourceMappingURL=ConexaoProfissionalClinica.js.map