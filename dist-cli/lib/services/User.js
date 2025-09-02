"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const repositories_1 = require("@/lib/repositories");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("@/lib/utils");
const redis_1 = require("@/lib/config/redis");
const firebase_1 = require("@/lib/config/firebase");
class UserService {
    constructor() {
        this.repository = new repositories_1.UserRepository();
    }
    async createUser(data) {
        const dataFilter = (0, utils_1.filterProps)(data, [...utils_1.USER_FIELDS]);
        if (!dataFilter.nome || !dataFilter.email || !dataFilter.senha_hash) {
            throw new Error('Campos obrigatórios ausentes');
        }
        const userGet = await this.repository.findByQueryOne({ email: dataFilter.email });
        if (userGet) {
            throw new Error('Usuário já cadastrado');
        }
        const senha_hash = await (0, utils_1.hashPassword)(dataFilter.senha_hash);
        await firebase_1.authAdmin.createUser({
            email: dataFilter.email,
            password: dataFilter.senha_hash,
            emailVerified: false,
            disabled: false,
        });
        try {
            const verificationLink = await firebase_1.authAdmin.generateEmailVerificationLink(dataFilter.email);
            await (0, utils_1.sendEmail)({
                forEmail: dataFilter.email,
                subject: "Verifique seu e-mail",
                body: `<h2>Seja Bem-vindo ${dataFilter.nome.split(" ")[0]}!</h2><p>Confirme seu e-mail clicando no link abaixo:</p><a href="${verificationLink}">Verificar e-mail</a>`
            });
        }
        catch (err) {
            console.warn('Erro ao enviar link de verificação:', err.message);
        }
        return this.repository.save({ ...dataFilter, senha_hash });
    }
    async login({ email, password }) {
        const user = await this.repository.findByQueryOne({ email }, true);
        if (!user) {
            throw new Error("Email ou senha inválidos");
        }
        const isPasswordValid = await (0, utils_1.validatePassword)(password, user.senha_hash);
        if (!isPasswordValid) {
            throw new Error("Email ou senha inválidos");
        }
        const userFirebase = await firebase_1.authAdmin.getUserByEmail(email);
        if (!userFirebase.emailVerified) {
            throw new Error("E-mail ainda não verificado. Verifique seu e-mail para ativar sua conta.");
        }
        const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
        const token = jsonwebtoken_1.default.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        await redis_1.redisClient.set(`token:${user.id}`, token, { EX: 3600 });
        return { token };
    }
    async verifyLogin(token) {
        const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const redisToken = await redis_1.redisClient.get(`token:${payload.sub}`);
        if (redisToken !== token) {
            throw new Error('Token inválido ou expirado');
        }
        return true;
    }
    async sendResetPasswordCode(email) {
        const user = await this.repository.findByQueryOne({ email });
        if (!user) {
            return;
        }
        const code = (0, utils_1.generateCodeVerification)();
        const key = `reset-code:${email}`;
        await redis_1.redisClient.set(key, code, { EX: 600 });
        await (0, utils_1.sendEmail)({
            forEmail: email,
            subject: "Código para Redefinição de Senha",
            body: `<h2>Seu código de verificação é:</h2><p><b>${code}</b></p><p>Este código expira em 10 minutos.</p>`
        });
    }
    async resetPassword({ password, email, otpCode }) {
        const key = `reset-code:${email}`;
        const storedCode = await redis_1.redisClient.get(key);
        if (!storedCode || storedCode !== otpCode) {
            throw new Error("Código de verificação inválido ou expirado.");
        }
        const user = await this.repository.findByQueryOne({ email });
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        const senha_hash = await (0, utils_1.hashPassword)(password);
        const userFirebase = await firebase_1.authAdmin.getUserByEmail(email);
        await firebase_1.authAdmin.updateUser(userFirebase.uid, { password });
        await redis_1.redisClient.del(key);
        return this.repository.update(user.id, { senha_hash });
    }
    async getUsers(query, id) {
        if (id)
            return this.repository.findById(id);
        if (query)
            return this.repository.findByQuery(query);
        return this.repository.findAll();
    }
    async updateUser(id, data) {
        return this.repository.update(id, data);
    }
    async deleteUser(id) {
        const user = await this.repository.findById(id);
        if (!user)
            throw new Error("Usuário não encontrado");
        const userRecord = await firebase_1.authAdmin.getUserByEmail(user.email);
        await firebase_1.authAdmin.deleteUser(userRecord.uid);
        return this.repository.delete(id);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=User.js.map