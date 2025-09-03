"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class EnderecoRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.Endereco);
    }
    async save(data) {
        const repo = await this.getRepo();
        const endereco = repo.create(data);
        return await repo.save(endereco);
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['clinica'] });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.EnderecoRepository = EnderecoRepository;
//# sourceMappingURL=Endereco.js.map