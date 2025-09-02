"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoConsultaRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class AgendamentoConsultaRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
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