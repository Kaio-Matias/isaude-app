import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from '@/lib/entities';

let dataSource: DataSource;

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: Object.values(entities),
  synchronize: process.env.NODE_ENV !== 'production',
});

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }
  dataSource = await AppDataSource.initialize();
  return dataSource;
}
