import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import os from 'os';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'application/pdf',
];

export async function uploadFile(file: File): Promise<string> {
  if (!allowedMimeTypes.includes(file.type)) {
    throw new Error(`Tipo de arquivo não permitido: ${file.type}. Permitidos: ${allowedMimeTypes.join(', ')}`);
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  
  const { error } = await supabase.storage
    .from('i-saude') // Nome do seu bucket
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    console.error("Supabase upload error:", error);
    throw new Error("Erro ao fazer upload do arquivo.");
  }

  const { data } = supabase.storage
    .from('i-saude')
    .getPublicUrl(fileName);

  return data.publicUrl;
}