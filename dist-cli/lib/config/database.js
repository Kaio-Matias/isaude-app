"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// FILE: src/lib/config/database.ts
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entities = __importStar(require("../entities/index"));
// Esta instância é exportada diretamente para que o TypeORM CLI a possa encontrar.
exports.AppDataSource = new typeorm_1.DataSource({
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
    getInstance: async () => {
        if (!exports.AppDataSource.isInitialized) {
            await exports.AppDataSource.initialize().catch((err) => {
                console.error("Erro ao inicializar a fonte de dados", err);
            });
        }
        return exports.AppDataSource;
    }
};
exports.default = database;
//# sourceMappingURL=database.js.map