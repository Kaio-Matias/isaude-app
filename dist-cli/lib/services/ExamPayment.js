"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamPaymentService = void 0;
const ExamPayment_1 = require("@/lib/repositories/ExamPayment"); // Crie este arquivo
const APIPayments_1 = require("./APIPayments"); // Crie este arquivo
const utils_1 = require("@/lib/utils");
const utils_2 = require("@/lib/utils");
class ExamPaymentService {
    constructor() {
        this.repository = new ExamPayment_1.ExamPaymentRepository();
        this.mercadoPagoService = new APIPayments_1.MercadoPagoService();
    }
    async createPayment(data) {
        const paymentData = {
            amount: data.valor,
            description: data.description,
            email: data.email,
            payment_method_id: data.metodo_pagamento
        };
        const paymentResult = await this.mercadoPagoService.createPayment(paymentData);
        const dataFilter = (0, utils_1.filterProps)(data, [...utils_2.EXAM_PAYMENT_FIELDS]);
        const ourPayment = await this.repository.save({
            ...dataFilter,
            id_mp_payment: paymentResult.id
        });
        return { paymentResult, ourPayment };
    }
    async getPayment(id) {
        return this.repository.findById(id);
    }
    async cancelPayment(id) {
        const payment = await this.repository.findById(id);
        if (!payment)
            throw new Error("Pagamento não encontrado em nosso sistema.");
        await this.mercadoPagoService.cancelPayment(String(payment.id_mp_payment));
        return this.repository.delete(id);
    }
}
exports.ExamPaymentService = ExamPaymentService;
//# sourceMappingURL=ExamPayment.js.map