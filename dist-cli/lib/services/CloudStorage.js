"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
exports.uploadFile = uploadFile;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY;
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
const allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/pdf',
];
async function uploadFile(file) {
    if (!allowedMimeTypes.includes(file.type)) {
        throw new Error(`Tipo de arquivo não permitido: ${file.type}. Permitidos: ${allowedMimeTypes.join(', ')}`);
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await exports.supabase.storage
        .from('i-saude') // Nome do seu bucket
        .upload(fileName, buffer, {
        contentType: file.type,
        upsert: true,
    });
    if (error) {
        console.error("Supabase upload error:", error);
        throw new Error("Erro ao fazer upload do arquivo.");
    }
    const { data } = exports.supabase.storage
        .from('i-saude')
        .getPublicUrl(fileName);
    return data.publicUrl;
}
//# sourceMappingURL=CloudStorage.js.map