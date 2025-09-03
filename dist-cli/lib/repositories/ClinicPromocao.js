"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicPromocaoRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class ClinicPromocaoRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.ClinicPromotion);
    }
    async save(data) {
        const repo = await this.getRepo();
        const promotion = repo.create(data);
        return await repo.save(promotion);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_promocao: id }, relations: ['clinica'] });
    }
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['clinica'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['clinica'] });
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
exports.ClinicPromocaoRepository = ClinicPromocaoRepository;
//# sourceMappingURL=ClinicPromocao.js.map