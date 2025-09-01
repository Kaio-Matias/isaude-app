import { NextResponse } from 'next/server';
import { UserService } from '@/lib/services/User';
import { FindOptionsWhere } from 'typeorm';
import { IUser } from '@/lib/interfaces';

// POST: Criar um novo usuário
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userService = new UserService();
    const newUser = await userService.createUser(body);
    
    // Omitir a senha do retorno
    const { senha_hash, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error: any) {
    if (error.message === 'Usuário já cadastrado') {
      return NextResponse.json({ message: error.message }, { status: 409 });
    }
    if (error.message === 'Campos obrigatórios ausentes') {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}

// GET: Listar todos os usuários
export async function GET(request: Request) {
    try {
        const userService = new UserService();
        // Lógica para filtros pode ser adicionada aqui a partir da URL (request.url)
        const users = await userService.getUsers();
        return NextResponse.json(users);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}