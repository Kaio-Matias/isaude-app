// AgendamentoConsulta
export const AGENDAMENTO_CONSULTA_FIELDS = [
  "paciente",
  "profissional",
  "clinica",
  "data_hora_inicio",
  "data_hora_fim",
  "tipo_consulta",
  "motivo",
  "link_sala",
  "comentarios",
] as const;

// Clinic
export const CLINIC_FIELDS = [
  "cnpj",
  "nome_fantasia",
  "telefone",
  "email",
  "cidade",
  "estado",
  "especialidades",
  "infraestrutura",
] as const;

// ClinicExam
export const CLINIC_EXAM_FIELDS = [
  "id_clinica",
  "nome_exame",
  "descricao",
  "preco",
  "prazo_resultado",
  "tipo",
] as const;

// ClinicPromotion
export const CLINIC_PROMOTION_FIELDS = [
  "id_clinica",
  "titulo",
  "descricao",
  "validade_inicio",
  "validade_fim",
  "imagem_url",
] as const;

// Documento
export const DOCUMENTO_FIELDS = [
  "tipo",
  "url_arquivo",
  "criado_na_plataforma",
  "consulta_id",
  "profissional_id",
  "paciente_id",
  "visivel_paciente",
  "observacoes",
] as const;

// ExamAgendamento
export const EXAM_AGENDAMENTO_FIELDS = [
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
] as const;

// ExamPayment
export const EXAM_PAYMENT_FIELDS = [
  "metodo_pagamento",
  "tipo",
  "valor",
  "parcelas",
  "status",
] as const;

// User
export const USER_FIELDS = [
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
] as const;

// Contato
export const CONTACT_FIELDS = [
  'tipo_contato',
  'valor',
  'is_principal',
  'id_usuario'
] as const;

// Avaliacao
export const AVALIACAO_FIELDS = [
  "paciente_cpf",
  "consulta_id",
  "exame_id",
  "profissional_cpf",
  "unidade_id",
  "nota",
  "comentario",
  "dt_avaliacao",
] as const;

// ConexaoProfissionalClinica
export const CONEXAO_PROFISSIONAL_CLINICA_FIELDS = [
  "profissional",
  "clinica",
  "status",
  "data_convite",
  "data_aceite",
  "mensagem",
] as const;

// Endereco
export const ENDERECO_FIELDS = [
  "id_clinica",
  "cep",
  "logradouro",
  "numero",
  "complemento",
  "bairro",
  "cidade",
  "estado",
  "pais",
] as const;