import { NextResponse } from 'next/server';
import { ExamAgendamentoService } from '@/lib/services/ExamAgendamento';
import { getDataSource } from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await getDataSource();
    const body = await request.json();
    const agendamentoService = new ExamAgendamentoService();
    const newAgendamento = await agendamentoService.createAgendamento(body);
    return NextResponse.json(newAgendamento, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}