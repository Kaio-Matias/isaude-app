"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoRepository = void 0;
const database_1 = require("../config/database");
const entities_1 = require("@/lib/entities");
class DocumentoRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.Documento);
    }
    async save(data) {
        const repo = await this.getRepo();
        const documento = repo.create(data);
        return await repo.save(documento);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_documento: id }, relations: ['paciente', 'profissional', 'consulta'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['paciente', 'profissional', 'consulta'] });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.DocumentoRepository = DocumentoRepository;
//# sourceMappingURL=Documento.js.map