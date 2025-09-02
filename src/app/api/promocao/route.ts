import { NextResponse } from 'next/server';
import { ClinicPromocaoService } from '@/lib/services/ClinicPromocao';
import { getDataSource } from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await getDataSource();
    const body = await request.json();
    const promocaoService = new ClinicPromocaoService();
    const newPromocao = await promocaoService.createPromocao(body);
    return NextResponse.json(newPromocao, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}