"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamAgendamentoRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class ExamAgendamentoRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
        return dataSource.getRepository(entities_1.ExamAgendamento);
    }
    async save(data) {
        const repo = await this.getRepo();
        const agendamento = repo.create(data);
        return await repo.save(agendamento);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOne({ where: { id_agendamento: id }, relations: ['paciente', 'exame', 'pagamento'] });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query, relations: ['paciente', 'exame', 'pagamento'] });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.ExamAgendamentoRepository = ExamAgendamentoRepository;
//# sourceMappingURL=ExamAgendamento.js.map