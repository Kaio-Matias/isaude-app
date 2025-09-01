import { ExamPaymentRepository } from '@/lib/repositories/ExamPayment'; // Crie este arquivo
import { MercadoPagoService } from './APIPayments'; // Crie este arquivo
import { IExamPayment } from '@/lib/interfaces';
import { filterProps } from '@/lib/utils';
import { EXAM_PAYMENT_FIELDS } from '@/lib/utils';


export class ExamPaymentService {
  private repository: ExamPaymentRepository;
  private mercadoPagoService: MercadoPagoService;

  constructor() {
    this.repository = new ExamPaymentRepository();
    this.mercadoPagoService = new MercadoPagoService();
  }

  async createPayment(data: IExamPayment & { description: string, email: string }): Promise<any> {
      const paymentData = {
          amount: data.valor,
          description: data.description,
          email: data.email,
          payment_method_id: data.metodo_pagamento
      }
      
      const paymentResult = await this.mercadoPagoService.createPayment(paymentData);

      const dataFilter = filterProps<IExamPayment>(data, [...EXAM_PAYMENT_FIELDS] as (keyof IExamPayment)[]);
      const ourPayment = await this.repository.save({
          ...dataFilter,
          id_mp_payment: paymentResult.id
      } as IExamPayment & { id_mp_payment: string });
      
      return { paymentResult, ourPayment };
  }
  
  async getPayment(id: number) {
      return this.repository.findById(id);
  }

  async cancelPayment(id: number) {
      const payment = await this.repository.findById(id);
      if(!payment) throw new Error("Pagamento não encontrado em nosso sistema.");

      await this.mercadoPagoService.cancelPayment(String(payment.id_mp_payment));
      return this.repository.delete(id);
  }
}