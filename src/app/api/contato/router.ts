// FILE: src/app/api/contato/router.ts
import { NextResponse } from 'next/server';
import { UserContactService } from '@/lib/services/UserContact';
import database from '@/lib/config/database';

export async function POST(request: Request) {
  try {
    await database.getInstance();
    const body = await request.json();
    const contactService = new UserContactService();
    const newContact = await contactService.createContact(body);
    return NextResponse.json(newContact, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

