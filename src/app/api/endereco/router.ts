// FILE: src/app/api/endereco/router.ts
import { NextResponse } from 'next/server';
import { EnderecoService } from '@/lib/services/Endereco';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const enderecoService = new EnderecoService();
    const newEndereco = await enderecoService.addEnderecoToClinic(body);
    return NextResponse.json(newEndereco, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

