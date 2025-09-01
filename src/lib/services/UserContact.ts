import { ContatoRepository, UserContactRepository, UserRepository } from '@/lib/repositories';
import { IContato } from '@/lib/interfaces';
import { Contato } from '@/lib/entities'; // A CORREÇÃO ESTÁ AQUI

export class UserContactService {
  private contactRepo: ContatoRepository;
  private userContactRepo: UserContactRepository;
  private userRepo: UserRepository;

  constructor() {
    this.contactRepo = new ContatoRepository();
    this.userContactRepo = new UserContactRepository();
    this.userRepo = new UserRepository();
  }

  // A CORREÇÃO ESTÁ AQUI
  async createContact(data: IContato): Promise<Contato> {
    if (!data.tipo_contato || !data.id_usuario || !data.valor) {
      throw new Error('Campos obrigatórios ausentes');
    }

    const user = await this.userRepo.findById(data.id_usuario);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return await this.contactRepo.save(data, user);
  }
}