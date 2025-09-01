import { NextResponse } from 'next/server';
import { UserService } from '@/lib/services/User';

interface Params {
  params: { id: string };
}

// GET: Obter um usuário por ID
export async function GET(request: Request, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const userService = new UserService();
    const user = await userService.getUsers(undefined, id);

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
    }
    
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}

// PUT: Atualizar um usuário
export async function PUT(request: Request, { params }: Params) {
    try {
        const id = parseInt(params.id, 10);
        const body = await request.json();
        const userService = new UserService();
        const updatedUser = await userService.updateUser(id, body);

        if (!updatedUser) {
            return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
        }

        return NextResponse.json(updatedUser);
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}

// DELETE: Deletar um usuário
export async function DELETE(request: Request, { params }: Params) {
    try {
        const id = parseInt(params.id, 10);
        const userService = new UserService();
        const success = await userService.deleteUser(id);

        if (!success) {
            return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
        }
        
        return new NextResponse(null, { status: 204 }); // No Content
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}