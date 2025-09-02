"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoService = void 0;
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const MP_BASE_URL = 'https://api.mercadopago.com';
const MP_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const mpAxios = axios_1.default.create({
    baseURL: MP_BASE_URL,
    headers: {
        Authorization: `Bearer ${MP_TOKEN}`,
        'Content-Type': 'application/json'
    }
});
class MercadoPagoService {
    async createPayment(data) {
        const body = {
            transaction_amount: data.amount,
            description: data.description,
            payment_method_id: data.payment_method_id,
            payer: data.payer || { email: data.email },
        };
        const response = await mpAxios.post('/v1/payments', body, { headers: { 'X-Idempotency-Key': (0, uuid_1.v4)() } });
        return response.data;
    }
    async getPayment(id) {
        const response = await mpAxios.get(`/v1/payments/${id}`);
        return response.data;
    }
    async cancelPayment(id) {
        const response = await mpAxios.put(`/v1/payments/${id}`, { status: 'cancelled' }, { headers: { 'X-Idempotency-Key': (0, uuid_1.v4)() } });
        return response.data;
    }
}
exports.MercadoPagoService = MercadoPagoService;
//# sourceMappingURL=APIPayments.js.map