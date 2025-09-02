// FILE: src/app/api/exam-agendamento/route.ts
import { NextResponse } from 'next/server';
import { ExamAgendamentoService } from '@/lib/services/ExamAgendamento';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const agendamentoService = new ExamAgendamentoService();
    const newAgendamento = await agendamentoService.createAgendamento(body);
    return NextResponse.json(newAgendamento, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

