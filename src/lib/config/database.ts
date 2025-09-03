// FILE: src/lib/config/database.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from '../entities/index';

// Esta instância é exportada diretamente para que o TypeORM CLI a possa encontrar.
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: Object.values(entities),
  synchronize: false,
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});

// Mantemos este padrão para o resto da sua aplicação não precisar de alterações.
const database = {
    getInstance: async (): Promise<DataSource> => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize().catch((err) => {
              console.error("Erro ao inicializar a fonte de dados", err);
            });
        }
        return AppDataSource;
    }
};

export default database;
