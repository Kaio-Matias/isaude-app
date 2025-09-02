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
exports.ClinicExam = void 0;
const typeorm_1 = require("typeorm");
const Clinic_1 = require("./Clinic");
let ClinicExam = class ClinicExam {
};
exports.ClinicExam = ClinicExam;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClinicExam.prototype, "id_exame", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinic_1.Clinic, (clinic) => clinic.exames),
    (0, typeorm_1.JoinColumn)({ name: 'id_clinica' }),
    __metadata("design:type", Clinic_1.Clinic)
], ClinicExam.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.RelationId)((exam) => exam.clinica),
    __metadata("design:type", Number)
], ClinicExam.prototype, "id_clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], ClinicExam.prototype, "nome_exame", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], ClinicExam.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], ClinicExam.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], ClinicExam.prototype, "prazo_resultado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], ClinicExam.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClinicExam.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClinicExam.prototype, "updated_at", void 0);
exports.ClinicExam = ClinicExam = __decorate([
    (0, typeorm_1.Entity)('clinic_exams')
], ClinicExam);
//# sourceMappingURL=ClinicExam.js.map