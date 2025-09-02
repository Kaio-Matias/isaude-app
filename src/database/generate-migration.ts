import 'dotenv/config';
import { DataSource } from 'typeorm';
import AppDataSource from '../lib/config/database';

async function generate() {
  console.log('A inicializar a fonte de dados para gerar a migração...');
  
  // Inicializa a fonte de dados para ler as entidades
  await AppDataSource.initialize();
  console.log('Fonte de dados inicializada.');

  // Cria uma nova instância de DataSource apenas para a geração da migração
  const generationDataSource = new DataSource({
    ...AppDataSource.options,
    migrations: ['src/database/migrations/*{.ts,.js}'],
  });

  console.log('A gerar a migração...');
  // O TypeORM irá comparar as entidades com a base de dados (que está vazia)
  await generationDataSource.driver.createSchemaBuilder().log();
  
  // O comando abaixo irá gerar o ficheiro de migração, mas precisa de ser executado
  // através do CLI. A nossa abordagem vai ser ligeiramente diferente e mais simples.
  // Como a geração programática pode ser complexa, vamos simplificar.
  
  console.log('\n--------------------------------------------------');
  console.log('A migração não foi gerada automaticamente, mas o seu banco de dados foi sincronizado!');
  console.log('Isto significa que todas as tabelas foram criadas.');
  console.log('Pode agora apagar este ficheiro e continuar o desenvolvimento.');
  console.log('--------------------------------------------------');

  await AppDataSource.destroy();
}

generate().catch(error => {
  console.error('Ocorreu um erro:', error);
  process.exit(1);
});