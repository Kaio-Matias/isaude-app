"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Contato_1 = require("./Contato");
const UsuariosContatos_1 = require("./UsuariosContatos");
const AgendamentoConsulta_1 = require("./AgendamentoConsulta");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', select: false }),
    __metadata("design:type", String)
], User.prototype, "senha_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "dt_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14, nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "cpfcnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "ft_perfil", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "ft_capa", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "perfil_privado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "descricao_bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_verificado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Contato_1.Contato, (contacts) => contacts.usuario),
    __metadata("design:type", Array)
], User.prototype, "contatos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UsuariosContatos_1.UsuariosContatos, (uc) => uc.contato),
    __metadata("design:type", Array)
], User.prototype, "contatos_de_outros", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AgendamentoConsulta_1.AgendamentoConsulta, (agendamento) => agendamento.paciente),
    __metadata("design:type", Array)
], User.prototype, "agendamentos_paciente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AgendamentoConsulta_1.AgendamentoConsulta, (agendamento) => agendamento.profissional),
    __metadata("design:type", Array)
], User.prototype, "agendamentos_profissional", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=User.js.map