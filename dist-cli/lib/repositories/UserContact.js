"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class UserContactRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
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