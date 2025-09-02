import { NextResponse } from 'next/server';
import { AvaliacaoService } from '@/lib/services/Avaliacao';
import database from '@/lib/config/database'; // Caminho corrigido

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const avaliacaoService = new AvaliacaoService();
    const newAvaliacao = await avaliacaoService.createAvaliacao(body);
    return NextResponse.json(newAvaliacao, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}