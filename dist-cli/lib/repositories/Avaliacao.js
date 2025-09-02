"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class AvaliacaoRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.Avaliacao);
    }
    async save(data) {
        const repo = await this.getRepo();
        const avaliacao = repo.create(data);
        return await repo.save(avaliacao);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_avaliacao: id }, relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
    }
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['paciente', 'profissional', 'consulta', 'exame', 'unidade'] });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.AvaliacaoRepository = AvaliacaoRepository;
//# sourceMappingURL=Avaliacao.js.map