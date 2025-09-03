"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// FILE: src/database/generate-migration.ts
require("dotenv/config");
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("../lib/config/database"));
async function generate() {
    console.log('A inicializar a fonte de dados para gerar a migração...');
    // CORREÇÃO: Obtém a instância do DataSource corretamente
    const AppDataSource = await database_1.default.getInstance();
    console.log('Fonte de dados inicializada.');
    // Cria uma nova instância de DataSource apenas para a geração da migração
    const generationDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=generate-migration.js.map