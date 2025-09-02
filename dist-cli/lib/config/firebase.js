"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmin = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Evita a reinicialização do app em ambiente de desenvolvimento
if (!firebase_admin_1.default.apps.length) {
    try {
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // A chave privada do Firebase vem como uma string com '\n'.
                // Precisamos formatá-la corretamente.
                privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            })
        });
        console.log("Firebase Admin inicializado com sucesso.");
    }
    catch (error) {
        console.error('Erro ao inicializar Firebase Admin:', error.message);
    }
}
exports.authAdmin = firebase_admin_1.default.auth();
exports.default = firebase_admin_1.default;
//# sourceMappingURL=firebase.js.map