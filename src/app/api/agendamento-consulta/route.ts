import { NextResponse } from 'next/server';
import { AgendamentoService } from '@/lib/services/Agendamento';
import database from '@/lib/config/database'; // Caminho corrigido

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const agendamentoService = new AgendamentoService();
    const newAgendamento = await agendamentoService.createAgendamento(body);
    return NextResponse.json(newAgendamento, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}