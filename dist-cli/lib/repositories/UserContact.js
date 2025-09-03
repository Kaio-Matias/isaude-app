"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class UserContactRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.UsuariosContatos);
    }
    async save(data) {
        const repo = await this.getRepo();
        const userContact = repo.create(data);
        return await repo.save(userContact);
    }
    async findOneByContactAndUser(usuarioId, contatoId) {
        const repo = await this.getRepo();
        return repo.findOne({
            where: {
                usuario: { id: usuarioId },
                contato: { id: contatoId }
            }
        });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.UserContactRepository = UserContactRepository;
//# sourceMappingURL=UserContact.js.map