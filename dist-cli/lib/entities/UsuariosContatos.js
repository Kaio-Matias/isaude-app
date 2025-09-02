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
exports.UsuariosContatos = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Contato_1 = require("./Contato");
let UsuariosContatos = class UsuariosContatos {
};
exports.UsuariosContatos = UsuariosContatos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuariosContatos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (usuario) => usuario.contatos),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", User_1.User)
], UsuariosContatos.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.RelationId)((contactUser) => contactUser.usuario),
    __metadata("design:type", Number)
], UsuariosContatos.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Contato_1.Contato, (contato) => contato.usuario),
    (0, typeorm_1.JoinColumn)({ name: 'contato_id' }),
    __metadata("design:type", Contato_1.Contato)
], UsuariosContatos.prototype, "contato", void 0);
__decorate([
    (0, typeorm_1.RelationId)((contactUser) => contactUser.contato),
    __metadata("design:type", Number)
], UsuariosContatos.prototype, "contato_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UsuariosContatos.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UsuariosContatos.prototype, "updated_at", void 0);
exports.UsuariosContatos = UsuariosContatos = __decorate([
    (0, typeorm_1.Entity)("usuarios_contatos")
], UsuariosContatos);
//# sourceMappingURL=UsuariosContatos.js.map