import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const MP_BASE_URL = 'https://api.mercadopago.com';
const MP_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;

const mpAxios = axios.create({
  baseURL: MP_BASE_URL,
  headers: {
    Authorization: `Bearer ${MP_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export class MercadoPagoService {
  async createPayment(data: {
    amount: number;
    description: string;
    email: string;
    payment_method_id: string;
    payer?: any;
  }) {
    const body = {
      transaction_amount: data.amount,
      description: data.description,
      payment_method_id: data.payment_method_id,
      payer: data.payer || { email: data.email },
    };

    const response = await mpAxios.post('/v1/payments', body, { headers: { 'X-Idempotency-Key': uuidv4() } });
    return response.data;
  }

  async getPayment(id: string) {
    const response = await mpAxios.get(`/v1/payments/${id}`);
    return response.data;
  }

  async cancelPayment(id: string) {
    const response = await mpAxios.put(`/v1/payments/${id}`, { status: 'cancelled' }, { headers: { 'X-Idempotency-Key': uuidv4() } });
    return response.data;
  }
}