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
exports.ConexaoProfissionalClinica = void 0;
const typeorm_1 = require("typeorm");
const Clinic_1 = require("./Clinic");
const User_1 = require("./User");
let ConexaoProfissionalClinica = class ConexaoProfissionalClinica {
};
exports.ConexaoProfissionalClinica = ConexaoProfissionalClinica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConexaoProfissionalClinica.prototype, "id_conexao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'id_profissional' }),
    __metadata("design:type", User_1.User)
], ConexaoProfissionalClinica.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.RelationId)((conexao) => conexao.profissional),
    __metadata("design:type", Number)
], ConexaoProfissionalClinica.prototype, "id_profissional", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinic_1.Clinic, (clinic) => clinic.conexoes),
    (0, typeorm_1.JoinColumn)({ name: 'id_clinica' }),
    __metadata("design:type", Clinic_1.Clinic)
], ConexaoProfissionalClinica.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.RelationId)((conexao) => conexao.clinica),
    __metadata("design:type", Number)
], ConexaoProfissionalClinica.prototype, "id_clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ConexaoProfissionalClinica.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ConexaoProfissionalClinica.prototype, "data_convite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'timestamp' }),
    __metadata("design:type", Date)
], ConexaoProfissionalClinica.prototype, "data_aceite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConexaoProfissionalClinica.prototype, "mensagem", void 0);
exports.ConexaoProfissionalClinica = ConexaoProfissionalClinica = __decorate([
    (0, typeorm_1.Entity)('conexoes_profissionais_clinicas')
], ConexaoProfissionalClinica);
//# sourceMappingURL=ConexaoProfissionalClinica.js.map