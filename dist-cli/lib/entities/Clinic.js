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
exports.Clinic = void 0;
const typeorm_1 = require("typeorm");
const ClinicExam_1 = require("./ClinicExam");
const ClinicPromocao_1 = require("./ClinicPromocao");
const AgendamentoConsulta_1 = require("./AgendamentoConsulta");
const ConexaoProfissionalClinica_1 = require("./ConexaoProfissionalClinica");
const Endereco_1 = require("./Endereco");
let Clinic = class Clinic {
};
exports.Clinic = Clinic;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Clinic.prototype, "id_clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14, unique: true }),
    __metadata("design:type", String)
], Clinic.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Clinic.prototype, "nome_fantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Clinic.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], Clinic.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Clinic.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    __metadata("design:type", String)
], Clinic.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Clinic.prototype, "especialidades", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Clinic.prototype, "infraestrutura", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ClinicExam_1.ClinicExam, (exame) => exame.clinica),
    __metadata("design:type", Array)
], Clinic.prototype, "exames", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ClinicPromocao_1.ClinicPromotion, (promo) => promo.clinica),
    __metadata("design:type", Array)
], Clinic.prototype, "promocoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AgendamentoConsulta_1.AgendamentoConsulta, (ag) => ag.clinica),
    __metadata("design:type", Array)
], Clinic.prototype, "agendamentos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ConexaoProfissionalClinica_1.ConexaoProfissionalClinica, (conexao) => conexao.clinica),
    __metadata("design:type", Array)
], Clinic.prototype, "conexoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Endereco_1.Endereco, (endereco) => endereco.clinica),
    __metadata("design:type", Array)
], Clinic.prototype, "enderecos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Clinic.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Clinic.prototype, "updated_at", void 0);
exports.Clinic = Clinic = __decorate([
    (0, typeorm_1.Entity)('clinics')
], Clinic);
//# sourceMappingURL=Clinic.js.map