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
exports.Documento = void 0;
const typeorm_1 = require("typeorm");
const AgendamentoConsulta_1 = require("./AgendamentoConsulta");
const User_1 = require("./User");
let Documento = class Documento {
};
exports.Documento = Documento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Documento.prototype, "id_documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Documento.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Documento.prototype, "url_arquivo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Documento.prototype, "dt_upload", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Documento.prototype, "criado_na_plataforma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'paciente_id' }),
    __metadata("design:type", User_1.User)
], Documento.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.RelationId)((doc) => doc.paciente),
    __metadata("design:type", Number)
], Documento.prototype, "paciente_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'profissional_id' }),
    __metadata("design:type", User_1.User)
], Documento.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.RelationId)((doc) => doc.profissional),
    __metadata("design:type", Number)
], Documento.prototype, "profissional_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AgendamentoConsulta_1.AgendamentoConsulta),
    (0, typeorm_1.JoinColumn)({ name: 'consulta_id' }),
    __metadata("design:type", AgendamentoConsulta_1.AgendamentoConsulta)
], Documento.prototype, "consulta", void 0);
__decorate([
    (0, typeorm_1.RelationId)((doc) => doc.consulta),
    __metadata("design:type", Number)
], Documento.prototype, "consulta_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Documento.prototype, "visivel_paciente", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Documento.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Documento.prototype, "updated_at", void 0);
exports.Documento = Documento = __decorate([
    (0, typeorm_1.Entity)('documentos')
], Documento);
//# sourceMappingURL=Documento.js.map