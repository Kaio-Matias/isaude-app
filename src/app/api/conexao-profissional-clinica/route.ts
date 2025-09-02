import { NextResponse } from 'next/server';
import { ConexaoProfissionalClinicaService } from '@/lib/services/ConexaoProfissionalClinica' ;
import { getDataSource } from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await getDataSource();
    const body = await request.json();
    const conexaoService = new ConexaoProfissionalClinicaService();
    const newConexao = await conexaoService.createConexao(body);
    return NextResponse.json(newConexao, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}