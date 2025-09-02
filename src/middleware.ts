import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-default-secret');

export async function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Authentication token not provided' },
      { status: 401 }
    );
  }

  try {
    await jose.jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Authentication token is invalid' },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: '/api/:path*',
};