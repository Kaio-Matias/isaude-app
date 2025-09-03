"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.examPaymentRepository = exports.ExamPaymentRepository = void 0;
const database_1 = __importDefault(require("@/lib/config/database")); // Caminho corrigido
const entities_1 = require("@/lib/entities");
class ExamPaymentRepository {
    async getRepo() {
        const dataSource = await database_1.default.getInstance();
        return dataSource.getRepository(entities_1.ExamPayment);
    }
    async save(data) {
        const repo = await this.getRepo();
        const payment = repo.create(data);
        return await repo.save(payment);
    }
    async findById(id) {
        const repo = await this.getRepo();
        return await repo.findOneBy({ id_pagamento: id });
    }
    async findByQuery(query) {
        const repo = await this.getRepo();
        return await repo.find({ where: query });
    }
    async delete(id) {
        const repo = await this.getRepo();
        const result = await repo.delete(id);
        return result.affected !== 0;
    }
}
exports.ExamPaymentRepository = ExamPaymentRepository;
exports.examPaymentRepository = new ExamPaymentRepository();
//# sourceMappingURL=ExamPayment.js.map