import { NextResponse } from 'next/server';
import { ExamPaymentService } from '@/lib/services/ExamPayment';
import { getDataSource } from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await getDataSource();
    const body = await request.json();
    const paymentService = new ExamPaymentService();
    const result = await paymentService.createPayment(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}