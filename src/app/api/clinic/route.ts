// FILE: src/app/api/clinic/route.ts
import { NextResponse } from 'next/server';
import { ClinicService } from '@/lib/services/Clinic';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const clinicService = new ClinicService();
    const newClinic = await clinicService.createClinic(body);
    return NextResponse.json(newClinic, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
    try {
        await database.getInstance();
        const clinicService = new ClinicService();
        const clinics = await clinicService.getClinics({});
        return NextResponse.json(clinics);
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}

