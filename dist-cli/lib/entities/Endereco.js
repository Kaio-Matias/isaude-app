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
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const Clinic_1 = require("./Clinic");
let Endereco = class Endereco {
};
exports.Endereco = Endereco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Endereco.prototype, "id_endereco", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinic_1.Clinic, (clinic) => clinic.enderecos, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_clinica' }),
    __metadata("design:type", Clinic_1.Clinic)
], Endereco.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.RelationId)((endereco) => endereco.clinica),
    __metadata("design:type", Number)
], Endereco.prototype, "id_clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Endereco.prototype, "logradouro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    __metadata("design:type", String)
], Endereco.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Endereco.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Endereco.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Endereco.prototype, "updated_at", void 0);
exports.Endereco = Endereco = __decorate([
    (0, typeorm_1.Entity)('enderecos')
], Endereco);
//# sourceMappingURL=Endereco.js.map