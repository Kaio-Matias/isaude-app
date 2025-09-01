import { UserRepository } from '@/lib/repositories';
import jwt from 'jsonwebtoken';
import { User } from '@/lib/entities';
import { IUser } from '@/lib/interfaces';
import { filterProps, USER_FIELDS, hashPassword, validatePassword, sendEmail, generateCodeVerification } from '@/lib/utils';
import { redisClient } from '@/lib/config/redis';
import { authAdmin } from '@/lib/config/firebase';
import { FindOptionsWhere } from 'typeorm';


export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async createUser(data: IUser): Promise<User> {
    const dataFilter = filterProps<IUser>(data, [...USER_FIELDS] as (keyof IUser)[]);

    if (!dataFilter.nome || !dataFilter.email || !dataFilter.senha_hash) {
      throw new Error('Campos obrigatórios ausentes');
    }

    const userGet = await this.repository.findByQueryOne({ email: dataFilter.email });
    if (userGet) {
      throw new Error('Usuário já cadastrado');
    }

    const senha_hash = await hashPassword(dataFilter.senha_hash);

    await authAdmin.createUser({
      email: dataFilter.email,
      password: dataFilter.senha_hash,
      emailVerified: false,
      disabled: false,
    });
    
    try {
        const verificationLink = await authAdmin.generateEmailVerificationLink(dataFilter.email);
        await sendEmail({
            forEmail: dataFilter.email,
            subject: "Verifique seu e-mail",
            body: `<h2>Seja Bem-vindo ${dataFilter.nome.split(" ")[0]}!</h2><p>Confirme seu e-mail clicando no link abaixo:</p><a href="${verificationLink}">Verificar e-mail</a>`
        });
    } catch (err: any) {
        console.warn('Erro ao enviar link de verificação:', err.message);
    }

    return this.repository.save({ ...dataFilter, senha_hash });
  }

  async login({ email, password }: { email: string; password: string; }): Promise<{ token: string }> {
    const user = await this.repository.findByQueryOne({ email }, true);
    if (!user) {
      throw new Error("Email ou senha inválidos");
    }

    const isPasswordValid = await validatePassword(password, user.senha_hash);
    if (!isPasswordValid) {
      throw new Error("Email ou senha inválidos");
    }

    const userFirebase = await authAdmin.getUserByEmail(email);
    if (!userFirebase.emailVerified) {
      throw new Error("E-mail ainda não verificado. Verifique seu e-mail para ativar sua conta.");
    }
    
    const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
    const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    
    await redisClient.set(`token:${user.id}`, token, { EX: 3600 });

    return { token };
  }

  async verifyLogin(token: string): Promise<boolean> {
      const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
      const payload = jwt.verify(token, JWT_SECRET) as { sub: string };
      const redisToken = await redisClient.get(`token:${payload.sub}`);

      if (redisToken !== token) {
          throw new Error('Token inválido ou expirado');
      }
      return true;
  }

  async sendResetPasswordCode(email: string): Promise<void> {
    const user = await this.repository.findByQueryOne({ email });
    if (!user) {
      return;
    }

    const code = generateCodeVerification();
    const key = `reset-code:${email}`;
    await redisClient.set(key, code, { EX: 600 }); 

    await sendEmail({
      forEmail: email,
      subject: "Código para Redefinição de Senha",
      body: `<h2>Seu código de verificação é:</h2><p><b>${code}</b></p><p>Este código expira em 10 minutos.</p>`
    });
  }
  
  async resetPassword({ password, email, otpCode }: {password: string, email: string, otpCode: string}): Promise<User | null> {
      const key = `reset-code:${email}`;
      const storedCode = await redisClient.get(key);

      if (!storedCode || storedCode !== otpCode) {
          throw new Error("Código de verificação inválido ou expirado.");
      }

      const user = await this.repository.findByQueryOne({ email });
      if (!user) {
          throw new Error("Usuário não encontrado.");
      }
      
      const senha_hash = await hashPassword(password);
      const userFirebase = await authAdmin.getUserByEmail(email);
      await authAdmin.updateUser(userFirebase.uid, { password });

      await redisClient.del(key); 

      return this.repository.update(user.id, { senha_hash });
  }

  async getUsers(query?: FindOptionsWhere<IUser>, id?: number): Promise<User | User[] | null> {
    if (id) return this.repository.findById(id);
    if (query) return this.repository.findByQuery(query);
    return this.repository.findAll();
  }

  async updateUser(id: number, data: Partial<IUser>): Promise<User | null> {
    return this.repository.update(id, data);
  }

  async deleteUser(id: number): Promise<boolean> {
      const user = await this.repository.findById(id);
      if(!user) throw new Error("Usuário não encontrado");
      
      const userRecord = await authAdmin.getUserByEmail(user.email);
      await authAdmin.deleteUser(userRecord.uid);
      
      return this.repository.delete(id);
  }
}