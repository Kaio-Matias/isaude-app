// FILE: src/app/api/payment/route.ts
import { NextResponse } from 'next/server';
import { ExamPaymentService } from '@/lib/services/ExamPayment';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const paymentService = new ExamPaymentService();
    const result = await paymentService.createPayment(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

