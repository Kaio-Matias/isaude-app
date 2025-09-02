import 'dotenv/config'; // Garante que as variáveis de ambiente do .env.local sejam carregadas PRIMEIRO
import AppDataSource from '../lib/config/database';

async function runMigrations() {
  try {
    console.log('A inicializar a fonte de dados para a migração...');
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    console.log('Fonte de dados inicializada.');

    console.log('A executar as migrações...');
    await AppDataSource.runMigrations();
    console.log('Migrações executadas com sucesso.');

    await AppDataSource.destroy();
  } catch (error) {
    console.error('Erro durante a execução da migração:', error);
    process.exit(1);
  }
}

runMigrations();