import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from '../entities/index';

const AppDataSource = new DataSource({
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

// Inicializa a fonte de dados uma única vez e exporta a instância inicializada
const dataSource = AppDataSource.initialize().catch((err) => {
  console.error("Erro ao inicializar a fonte de dados", err);
});

export default {
    getInstance: async () => {
        if (!AppDataSource.isInitialized) {
            await dataSource;
        }
        return AppDataSource;
    }
};