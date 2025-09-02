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
exports.ExamAgendamento = void 0;
const typeorm_1 = require("typeorm");
const ExamPayment_1 = require("./ExamPayment");
const ClinicExam_1 = require("./ClinicExam");
const User_1 = require("./User");
let ExamAgendamento = class ExamAgendamento {
};
exports.ExamAgendamento = ExamAgendamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "id_agendamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario_paciente' }),
    __metadata("design:type", User_1.User)
], ExamAgendamento.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.RelationId)((ag) => ag.paciente),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "id_usuario_paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicExam_1.ClinicExam),
    (0, typeorm_1.JoinColumn)({ name: 'id_exame' }),
    __metadata("design:type", ClinicExam_1.ClinicExam)
], ExamAgendamento.prototype, "exame", void 0);
__decorate([
    (0, typeorm_1.RelationId)((ag) => ag.exame),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "id_exame", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ExamPayment_1.ExamPayment, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_pagamento' }),
    __metadata("design:type", ExamPayment_1.ExamPayment)
], ExamAgendamento.prototype, "pagamento", void 0);
__decorate([
    (0, typeorm_1.RelationId)((ag) => ag.pagamento),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "id_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], ExamAgendamento.prototype, "data_hora", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: 'Pendente' }),
    __metadata("design:type", String)
], ExamAgendamento.prototype, "status_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ExamAgendamento.prototype, "lembrete_enviado", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "altura_m", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "peso_kg", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "pressao_sistolica", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], ExamAgendamento.prototype, "pressao_diastolica", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ExamAgendamento.prototype, "atualizar_minha_saude", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExamAgendamento.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExamAgendamento.prototype, "updated_at", void 0);
exports.ExamAgendamento = ExamAgendamento = __decorate([
    (0, typeorm_1.Entity)('exam_agendamentos')
], ExamAgendamento);
//# sourceMappingURL=ExamAgendamento.js.map