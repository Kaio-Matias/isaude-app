"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = validatePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function validatePassword(password, hash) {
    return bcrypt_1.default.compare(password, hash);
}
//# sourceMappingURL=validatePassword.js.map