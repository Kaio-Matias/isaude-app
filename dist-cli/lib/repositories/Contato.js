"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatoRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class ContatoRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.Contato);
    }
    async save(data, user) {
        const repo = await this.getRepo();
        const newContact = repo.create({ ...data, usuario: user });
        return await repo.save(newContact);
    }
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['usuario'] });
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id }, relations: ['usuario'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['usuario'] });
    }
    async findByQueryOne(query) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: query, relations: ['usuario'] });
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
exports.ContatoRepository = ContatoRepository;
//# sourceMappingURL=Contato.js.map