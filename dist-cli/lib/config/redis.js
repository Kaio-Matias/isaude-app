"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis_1 = require("redis");
// Configuração do cliente Redis
exports.redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
});
exports.redisClient.on('error', (err) => console.log('Redis Client Error', err));
// Conecta ao Redis apenas uma vez
if (!exports.redisClient.isOpen) {
    exports.redisClient.connect().catch(console.error);
}
//# sourceMappingURL=redis.js.map