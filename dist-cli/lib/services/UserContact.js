"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactService = void 0;
const repositories_1 = require("@/lib/repositories");
class UserContactService {
    constructor() {
        this.contactRepo = new repositories_1.ContatoRepository();
        this.userContactRepo = new repositories_1.UserContactRepository();
        this.userRepo = new repositories_1.UserRepository();
    }
    // A CORREÇÃO ESTÁ AQUI
    async createContact(data) {
        if (!data.tipo_contato || !data.id_usuario || !data.valor) {
            throw new Error('Campos obrigatórios ausentes');
        }
        const user = await this.userRepo.findById(data.id_usuario);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return await this.contactRepo.save(data, user);
    }
}
exports.UserContactService = UserContactService;
//# sourceMappingURL=UserContact.js.map