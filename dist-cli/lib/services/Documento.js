"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoService = void 0;
const repositories_1 = require("@/lib/repositories");
class DocumentoService {
    constructor() {
        this.repository = new repositories_1.DocumentoRepository();
    }
    async createDocumento(data) {
        if (!data.tipo || !data.url_arquivo || !data.paciente_id || !data.consulta_id) {
            throw new Error("Campos obrigatórios para criar o documento estão faltando.");
        }
        // Aqui você adicionaria validações para ver se paciente, profissional e consulta existem
        return this.repository.save(data);
    }
    async getDocumentosByConsulta(consultaId) {
        return this.repository.findByQuery({ consulta: { id_consulta: consultaId } });
    }
}
exports.DocumentoService = DocumentoService;
//# sourceMappingURL=Documento.js.map