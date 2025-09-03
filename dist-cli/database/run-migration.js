"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// FILE: src/database/run-migration.ts
require("dotenv/config"); // Garante que as variáveis de ambiente do .env.local sejam carregadas PRIMEIRO
const database_1 = __importDefault(require("../lib/config/database"));
async function runMigrations() {
    try {
        console.log('A inicializar a fonte de dados para a migração...');
        // CORREÇÃO: Obtém a instância do DataSource corretamente
        const AppDataSource = await database_1.default.getInstance();
        console.log('Fonte de dados inicializada.');
        console.log('A executar as migrações...');
        await AppDataSource.runMigrations();
        console.log('Migrações executadas com sucesso.');
        await AppDataSource.destroy();
    }
    catch (error) {
        console.error('Erro durante a execução da migração:', error);
        process.exit(1);
    }
}
runMigrations();
//# sourceMappingURL=run-migration.js.map