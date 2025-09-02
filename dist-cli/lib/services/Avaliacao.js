"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoService = void 0;
const repositories_1 = require("@/lib/repositories");
class AvaliacaoService {
    constructor() {
        this.repository = new repositories_1.AvaliacaoRepository();
    }
    async createAvaliacao(data) {
        if (!data.nota || !data.paciente_id) {
            throw new Error("Nota e ID do paciente são obrigatórios.");
        }
        // A CORREÇÃO ESTÁ AQUI
        return this.repository.save(data);
    }
}
exports.AvaliacaoService = AvaliacaoService;
//# sourceMappingURL=Avaliacao.js.map