"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoConsultaRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class AgendamentoConsultaRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.AgendamentoConsulta);
    }
    async save(data) {
        const repo = await this.getRepo();
        const agendamento = repo.create(data);
        return await repo.save(agendamento);
    }
    // A CORREÇÃO ESTÁ AQUI. O RETORNO É Promise<AgendamentoConsulta[]>
    async findAll() {
        const repo = await this.getRepo();
        return await repo.find({ relations: ['clinica', 'paciente', 'profissional'] });
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({
            where: { id_consulta: id },
            relations: ['clinica', 'paciente', 'profissional'],
        });
    }
}
exports.AgendamentoConsultaRepository = AgendamentoConsultaRepository;
//# sourceMappingURL=Agendamento.js.map