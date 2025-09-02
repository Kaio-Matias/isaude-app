import { NextResponse } from 'next/server';
import { uploadFile } from '@/lib/services/CloudStorage';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ message: 'Nenhum arquivo enviado' }, { status: 400 });
    }

    const publicUrl = await uploadFile(file);

    return NextResponse.json({ url: publicUrl });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}