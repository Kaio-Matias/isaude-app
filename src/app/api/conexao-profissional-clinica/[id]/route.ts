import { NextResponse } from 'next/server';
import { ConexaoProfissionalClinicaService } from '@/lib/services/ConexaoProfissionalClinica';
import { getDataSource } from '@/lib/config/database';

interface Params {
  params: { id: string };
}

export async function PUT(request: Request, { params }: Params) {
    try {
        await getDataSource();
        const id = parseInt(params.id, 10);
        const { status } = await request.json();
        const conexaoService = new ConexaoProfissionalClinicaService();
        const updatedConexao = await conexaoService.updateStatusConexao(id, status);

        if (!updatedConexao) {
            return NextResponse.json({ message: 'Conexão não encontrada.' }, { status: 404 });
        }

        return NextResponse.json(updatedConexao);
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}