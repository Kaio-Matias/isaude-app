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
exports.ExamPayment = void 0;
const typeorm_1 = require("typeorm");
let ExamPayment = class ExamPayment {
};
exports.ExamPayment = ExamPayment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamPayment.prototype, "id_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], ExamPayment.prototype, "metodo_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], ExamPayment.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], ExamPayment.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    __metadata("design:type", Number)
], ExamPayment.prototype, "parcelas", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: 'Confirmado' }),
    __metadata("design:type", String)
], ExamPayment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExamPayment.prototype, "id_mp_payment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExamPayment.prototype, "data_pagamento", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ExamPayment.prototype, "updated_at", void 0);
exports.ExamPayment = ExamPayment = __decorate([
    (0, typeorm_1.Entity)('exam_payments')
], ExamPayment);
//# sourceMappingURL=ExamPayment.js.map