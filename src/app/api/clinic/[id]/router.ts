import { NextResponse } from 'next/server';
import { ClinicService } from '@/lib/services/Clinic';
import { getDataSource } from '@/lib/config/database';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    await getDataSource();
    const id = parseInt(params.id, 10);
    const clinicService = new ClinicService();
    const clinic = await clinicService.getClinics({ id });

    if (!clinic) {
      return NextResponse.json({ message: 'Clínica não encontrada.' }, { status: 404 });
    }
    
    return NextResponse.json(clinic);
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
    try {
        await getDataSource();
        const id = parseInt(params.id, 10);
        const body = await request.json();
        const clinicService = new ClinicService();
        const updatedClinic = await clinicService.updateClinic(id, body);

        if (!updatedClinic) {
            return NextResponse.json({ message: 'Clínica não encontrada.' }, { status: 404 });
        }

        return NextResponse.json(updatedClinic);
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: Params) {
    try {
        await getDataSource();
        const id = parseInt(params.id, 10);
        const clinicService = new ClinicService();
        const success = await clinicService.deleteClinic(id);

        if (!success) {
            return NextResponse.json({ message: 'Clínica não encontrada.' }, { status: 404 });
        }
        
        return new NextResponse(null, { status: 204 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}