"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examPaymentRepository = exports.ExamPaymentRepository = void 0;
const database_1 = require("@/lib/config/database");
const entities_1 = require("@/lib/entities");
class ExamPaymentRepository {
    async getRepo() {
        const dataSource = await (0, database_1.getDataSource)();
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