import { Repository, FindOptionsWhere } from 'typeorm';
import { getDataSource } from '@/lib/config/database';
import { User } from '@/lib/entities';
import { IUser } from '@/lib/interfaces';

export class UserRepository {
  private async getRepo(): Promise<Repository<User>> {
    const dataSource = await getDataSource();
    return dataSource.getRepository(User);
  }

  async save(data: IUser): Promise<User> {
    const repo = await this.getRepo();
    const user = repo.create(data);
    return await repo.save(user);
  }

  async findAll(): Promise<User[]> {
    const repo = await this.getRepo();
    return await repo.find({ relations: ['contatos', 'contatos_de_outros'] });
  }

  async findById(id: number): Promise<User | null> {
    const repo = await this.getRepo();
    return await repo.findOne({ where: { id }, relations: ['contatos', 'contatos_de_outros'] });
  }

  async findByQuery(query: FindOptionsWhere<IUser>): Promise<User[]> {
    const repo = await this.getRepo();
    return await repo.find({ where: query, relations: ['contatos', 'contatos_de_outros'] });
  }
  
  async findByQueryOne(query: FindOptionsWhere<IUser>, isGetPassword = false): Promise<User | null> {
      const repo = await this.getRepo();
      const qb = repo.createQueryBuilder("user")
          .leftJoinAndSelect("user.contatos", "contatos")
          .leftJoinAndSelect("user.contatos_de_outros", "contatos_de_outros");

      if (isGetPassword) {
          qb.addSelect("user.senha_hash");
      }
      
      // Construir a cláusula 'where' dinamicamente
      Object.keys(query).forEach((key, index) => {
          if (index === 0) {
              qb.where(`user.${key} = :${key}`, { [key]: query[key as keyof IUser] });
          } else {
              qb.andWhere(`user.${key} = :${key}`, { [key]: query[key as keyof IUser] });
          }
      });
      
      return await qb.getOne();
  }


  async update(id: number, data: Partial<IUser>): Promise<User | null> {
    const repo = await this.getRepo();
    const user = await repo.findOneBy({ id });
    if (!user) return null;
    Object.assign(user, data);
    return await repo.save(user);
  }

  async delete(id: number): Promise<boolean> {
    const repo = await this.getRepo();
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}