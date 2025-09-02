"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamAgendamentoService = void 0;
const repositories_1 = require("@/lib/repositories");
class ExamAgendamentoService {
    constructor() {
        this.repository = new repositories_1.ExamAgendamentoRepository();
    }
    async createAgendamento(data) {
        // Adicionar validações de existência de paciente, exame, etc.
        if (!data.id_usuario_paciente || !data.id_exame || !data.data_hora) {
            throw new Error("Campos obrigatórios para o agendamento de exame estão faltando.");
        }
        return this.repository.save(data);
    }
}
exports.ExamAgendamentoService = ExamAgendamentoService;
//# sourceMappingURL=ExamAgendamento.js.map