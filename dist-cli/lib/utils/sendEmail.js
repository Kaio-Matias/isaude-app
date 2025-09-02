"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendEmail({ forEmail, subject, body }) {
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_SERVER_PORT || '587'),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: forEmail,
        subject,
        html: body
    });
}
//# sourceMappingURL=sendEmail.js.map