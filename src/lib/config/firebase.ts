import admin from 'firebase-admin';

// Evita a reinicialização do app em ambiente de desenvolvimento
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // A chave privada do Firebase vem como uma string com '\n'.
        // Precisamos formatá-la corretamente.
        privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      })
    });
    console.log("Firebase Admin inicializado com sucesso.");
  } catch (error: any) {
    console.error('Erro ao inicializar Firebase Admin:', error.message);
  }
}

export const authAdmin = admin.auth();
export default admin;
