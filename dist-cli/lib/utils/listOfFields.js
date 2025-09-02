"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDERECO_FIELDS = exports.CONEXAO_PROFISSIONAL_CLINICA_FIELDS = exports.AVALIACAO_FIELDS = exports.CONTACT_FIELDS = exports.USER_FIELDS = exports.EXAM_PAYMENT_FIELDS = exports.EXAM_AGENDAMENTO_FIELDS = exports.DOCUMENTO_FIELDS = exports.CLINIC_PROMOTION_FIELDS = exports.CLINIC_EXAM_FIELDS = exports.CLINIC_FIELDS = exports.AGENDAMENTO_CONSULTA_FIELDS = void 0;
// AgendamentoConsulta
exports.AGENDAMENTO_CONSULTA_FIELDS = [
    "paciente",
    "profissional",
    "clinica",
    "data_hora_inicio",
    "data_hora_fim",
    "tipo_consulta",
    "motivo",
    "link_sala",
    "comentarios",
];
// Clinic
exports.CLINIC_FIELDS = [
    "cnpj",
    "nome_fantasia",
    "telefone",
    "email",
    "cidade",
    "estado",
    "especialidades",
    "infraestrutura",
];
// ClinicExam
exports.CLINIC_EXAM_FIELDS = [
    "id_clinica",
    "nome_exame",
    "descricao",
    "preco",
    "prazo_resultado",
    "tipo",
];
// ClinicPromotion
exports.CLINIC_PROMOTION_FIELDS = [
    "id_clinica",
    "titulo",
    "descricao",
    "validade_inicio",
    "validade_fim",
    "imagem_url",
];
// Documento
exports.DOCUMENTO_FIELDS = [
    "tipo",
    "url_arquivo",
    "criado_na_plataforma",
    "consulta_id",
    "profissional_id",
    "paciente_id",
    "visivel_paciente",
    "observacoes",
];
// ExamAgendamento
exports.EXAM_AGENDAMENTO_FIELDS = [
    "paciente",
    "exame",
    "data_hora",
    "status_pagamento",
    "lembrete_enviado",
    "altura_m",
    "peso_kg",
    "pressao_sistolica",
    "pressao_diastolica",
    "atualizar_minha_saude",
    "id_pagamento",
];
// ExamPayment
exports.EXAM_PAYMENT_FIELDS = [
    "metodo_pagamento",
    "tipo",
    "valor",
    "parcelas",
    "status",
];
// User
exports.USER_FIELDS = [
    'id',
    'nome',
    'email',
    'senha_hash',
    'tipo_usuario',
    'telefone',
    'genero',
    'dt_nascimento',
    'estado',
    'is_active',
    'cpfcnpj',
    'ft_perfil',
    'ft_capa',
    'perfil_privado',
    'descricao_bio',
    'is_verificado',
    'created_at',
    'updated_at',
];
// Contato
exports.CONTACT_FIELDS = [
    'tipo_contato',
    'valor',
    'is_principal',
    'id_usuario'
];
// Avaliacao
exports.AVALIACAO_FIELDS = [
    "paciente_cpf",
    "consulta_id",
    "exame_id",
    "profissional_cpf",
    "unidade_id",
    "nota",
    "comentario",
    "dt_avaliacao",
];
// ConexaoProfissionalClinica
exports.CONEXAO_PROFISSIONAL_CLINICA_FIELDS = [
    "profissional",
    "clinica",
    "status",
    "data_convite",
    "data_aceite",
    "mensagem",
];
// Endereco
exports.ENDERECO_FIELDS = [
    "id_clinica",
    "cep",
    "logradouro",
    "numero",
    "complemento",
    "bairro",
    "cidade",
    "estado",
    "pais",
];
//# sourceMappingURL=listOfFields.js.map