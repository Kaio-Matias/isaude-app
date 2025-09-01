import { createClient } from 'redis';

// Configuração do cliente Redis
export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

// Conecta ao Redis apenas uma vez
if (!redisClient.isOpen) {
    redisClient.connect().catch(console.error);
}