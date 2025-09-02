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
exports.Avaliacao = void 0;
const typeorm_1 = require("typeorm");
const AgendamentoConsulta_1 = require("./AgendamentoConsulta");
const Documento_1 = require("./Documento");
const Clinic_1 = require("./Clinic");
const User_1 = require("./User");
let Avaliacao = class Avaliacao {
};
exports.Avaliacao = Avaliacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Avaliacao.prototype, "id_avaliacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'paciente_cpf', referencedColumnName: 'cpfcnpj' }),
    __metadata("design:type", User_1.User)
], Avaliacao.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.RelationId)((avaliacao) => avaliacao.paciente),
    __metadata("design:type", String)
], Avaliacao.prototype, "paciente_cpf", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AgendamentoConsulta_1.AgendamentoConsulta, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'consulta_id' }),
    __metadata("design:type", AgendamentoConsulta_1.AgendamentoConsulta)
], Avaliacao.prototype, "consulta", void 0);
__decorate([
    (0, typeorm_1.RelationId)((avaliacao) => avaliacao.consulta),
    __metadata("design:type", Number)
], Avaliacao.prototype, "consulta_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Documento_1.Documento, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'exame_id' }),
    __metadata("design:type", Documento_1.Documento)
], Avaliacao.prototype, "exame", void 0);
__decorate([
    (0, typeorm_1.RelationId)((avaliacao) => avaliacao.exame),
    __metadata("design:type", Number)
], Avaliacao.prototype, "exame_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'profissional_cpf', referencedColumnName: 'cpfcnpj' }),
    __metadata("design:type", User_1.User)
], Avaliacao.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.RelationId)((avaliacao) => avaliacao.profissional),
    __metadata("design:type", String)
], Avaliacao.prototype, "profissional_cpf", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinic_1.Clinic, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'unidade_id', referencedColumnName: 'cnpj' }),
    __metadata("design:type", Clinic_1.Clinic)
], Avaliacao.prototype, "unidade", void 0);
__decorate([
    (0, typeorm_1.RelationId)((avaliacao) => avaliacao.unidade),
    __metadata("design:type", String)
], Avaliacao.prototype, "unidade_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Avaliacao.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Avaliacao.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'dt_avaliacao' }),
    __metadata("design:type", Date)
], Avaliacao.prototype, "dt_avaliacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Avaliacao.prototype, "updated_at", void 0);
exports.Avaliacao = Avaliacao = __decorate([
    (0, typeorm_1.Entity)('avaliacoes')
], Avaliacao);
//# sourceMappingURL=Avaliacao.js.map