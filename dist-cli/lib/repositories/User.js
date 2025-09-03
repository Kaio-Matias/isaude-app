"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class UserRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.User);
    }
    async save(data) {
        const repo = await this.getRepo();
        const user = repo.create(data);
        return await repo.save(user);
    }
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['contatos', 'contatos_de_outros'] });
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id }, relations: ['contatos', 'contatos_de_outros'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['contatos', 'contatos_de_outros'] });
    }
    async findByQueryOne(query, isGetPassword = false) {
        const repo = await this.getRepo();
        const qb = repo.createQueryBuilder("user")
            .leftJoinAndSelect("user.contatos", "contatos")
            .leftJoinAndSelect("user.contatos_de_outros", "contatos_de_outros");
        if (isGetPassword) {
            qb.addSelect("user.senha_hash");
        }
        // Construir a cláusula 'where' dinamicamente
        Object.keys(query).forEach((key, index) => {
            if (index === 0) {
                qb.where(`user.${key} = :${key}`, { [key]: query[key] });
            }
            else {
                qb.andWhere(`user.${key} = :${key}`, { [key]: query[key] });
            }
        });
        return await qb.getOne();
    }
    async update(id, data) {
        const repo = await this.getRepo();
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        Object.assign(user, data);
        return await repo.save(user);
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=User.js.map