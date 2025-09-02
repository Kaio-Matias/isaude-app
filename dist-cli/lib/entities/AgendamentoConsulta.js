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
exports.AgendamentoConsulta = void 0;
const typeorm_1 = require("typeorm");
const Clinic_1 = require("./Clinic");
const User_1 = require("./User");
let AgendamentoConsulta = class AgendamentoConsulta {
};
exports.AgendamentoConsulta = AgendamentoConsulta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AgendamentoConsulta.prototype, "id_consulta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.agendamentos_paciente),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario_paciente' }),
    __metadata("design:type", User_1.User)
], AgendamentoConsulta.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.RelationId)((consulta) => consulta.paciente),
    __metadata("design:type", Number)
], AgendamentoConsulta.prototype, "id_usuario_paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.agendamentos_profissional),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario_profissional' }),
    __metadata("design:type", User_1.User)
], AgendamentoConsulta.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.RelationId)((consulta) => consulta.profissional),
    __metadata("design:type", Number)
], AgendamentoConsulta.prototype, "id_usuario_profissional", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinic_1.Clinic, clinic => clinic.agendamentos),
    (0, typeorm_1.JoinColumn)({ name: 'id_clinica' }),
    __metadata("design:type", Clinic_1.Clinic)
], AgendamentoConsulta.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.RelationId)((consulta) => consulta.clinica),
    __metadata("design:type", Number)
], AgendamentoConsulta.prototype, "id_clinica", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], AgendamentoConsulta.prototype, "data_hora_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", Date)
], AgendamentoConsulta.prototype, "data_hora_fim", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], AgendamentoConsulta.prototype, "tipo_consulta", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300 }),
    __metadata("design:type", String)
], AgendamentoConsulta.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], AgendamentoConsulta.prototype, "link_sala", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], AgendamentoConsulta.prototype, "comentarios", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AgendamentoConsulta.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AgendamentoConsulta.prototype, "updated_at", void 0);
exports.AgendamentoConsulta = AgendamentoConsulta = __decorate([
    (0, typeorm_1.Entity)('agendamentos_consultas')
], AgendamentoConsulta);
//# sourceMappingURL=AgendamentoConsulta.js.map