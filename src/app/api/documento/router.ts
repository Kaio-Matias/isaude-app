// FILE: src/app/api/documento/router.ts
import { NextResponse } from 'next/server';
import { DocumentoService } from '@/lib/services/Documento';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const documentoService = new DocumentoService();
    const newDocumento = await documentoService.createDocumento(body);
    return NextResponse.json(newDocumento, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

