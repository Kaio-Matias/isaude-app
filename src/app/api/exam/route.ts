import { NextResponse } from 'next/server';
import { ClinicExamService } from '@/lib/services/ClinicExam';
import { getDataSource } from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await getDataSource();
    const body = await request.json();
    const examService = new ClinicExamService();
    const newExam = await examService.createExam(body);
    return NextResponse.json(newExam, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}