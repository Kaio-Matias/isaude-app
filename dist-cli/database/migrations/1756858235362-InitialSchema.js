"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1756858235362 = void 0;
class InitialSchema1756858235362 {
    constructor() {
        this.name = 'InitialSchema1756858235362';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "clinic_exams" ("id_exame" SERIAL NOT NULL, "nome_exame" character varying(100) NOT NULL, "descricao" text, "preco" numeric NOT NULL, "prazo_resultado" character varying(50) NOT NULL, "tipo" character varying(50), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_clinica" integer, CONSTRAINT "PK_a92911d69da8567416d03ddf0ad" PRIMARY KEY ("id_exame"))`);
        await queryRunner.query(`CREATE TABLE "clinic_promotions" ("id_promocao" SERIAL NOT NULL, "titulo" character varying(100) NOT NULL, "descricao" text NOT NULL, "validade_inicio" date NOT NULL, "validade_fim" date NOT NULL, "imagem_url" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_clinica" integer, CONSTRAINT "PK_ba05629e841b93081b0cb8976b7" PRIMARY KEY ("id_promocao"))`);
        await queryRunner.query(`CREATE TABLE "contatos" ("id" SERIAL NOT NULL, "tipo_contato" integer NOT NULL, "valor" character varying(255) NOT NULL, "is_principal" boolean NOT NULL DEFAULT false, "dt_criacao" TIMESTAMP NOT NULL DEFAULT now(), "dt_inativacao" TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_usuario" integer, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios_contatos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "usuario_id" integer, "contato_id" integer, CONSTRAINT "PK_02e60f560861d47cb823424a4f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_usuario" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "senha_hash" text NOT NULL, "tipo_usuario" character varying(50) NOT NULL, "telefone" character varying(20), "genero" character varying(10), "dt_nascimento" date, "estado" character varying(2), "is_active" boolean NOT NULL DEFAULT true, "cpfcnpj" character varying(14), "ft_perfil" character varying(255), "ft_capa" character varying(255), "perfil_privado" boolean NOT NULL DEFAULT false, "descricao_bio" character varying(500), "is_verificado" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_d470a8e05c1a60492eea66d149d" UNIQUE ("cpfcnpj"), CONSTRAINT "PK_b2826bc9a58e9aba252457ad50b" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`CREATE TABLE "conexoes_profissionais_clinicas" ("id_conexao" SERIAL NOT NULL, "status" character varying NOT NULL, "data_convite" TIMESTAMP NOT NULL DEFAULT now(), "data_aceite" TIMESTAMP, "mensagem" character varying, "id_profissional" integer, "id_clinica" integer, CONSTRAINT "PK_26582510a274ac36863488599fc" PRIMARY KEY ("id_conexao"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id_endereco" SERIAL NOT NULL, "cep" character varying(8) NOT NULL, "logradouro" character varying(255) NOT NULL, "numero" character varying(10), "complemento" character varying(100), "bairro" character varying(100) NOT NULL, "cidade" character varying(100) NOT NULL, "estado" character varying(2) NOT NULL, "pais" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_clinica" integer, CONSTRAINT "PK_b5d9a6665573b99bdbf584ea0b5" PRIMARY KEY ("id_endereco"))`);
        await queryRunner.query(`CREATE TABLE "clinics" ("id_clinica" SERIAL NOT NULL, "cnpj" character varying(14) NOT NULL, "nome_fantasia" character varying(255) NOT NULL, "telefone" character varying(20), "email" character varying(255), "cidade" character varying(100) NOT NULL, "estado" character varying(2) NOT NULL, "especialidades" text, "infraestrutura" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4ab0ea5c03a4994cee1897615ed" UNIQUE ("cnpj"), CONSTRAINT "UQ_58953011c57cc9bf5b38182e454" UNIQUE ("email"), CONSTRAINT "PK_7fa7384524889879f3b22cf5bab" PRIMARY KEY ("id_clinica"))`);
        await queryRunner.query(`CREATE TABLE "agendamentos_consultas" ("id_consulta" SERIAL NOT NULL, "data_hora_inicio" TIMESTAMP NOT NULL, "data_hora_fim" TIMESTAMP NOT NULL, "tipo_consulta" character varying(50) NOT NULL, "motivo" character varying(300) NOT NULL, "link_sala" character varying(255), "comentarios" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_usuario_paciente" integer, "id_usuario_profissional" integer, "id_clinica" integer, CONSTRAINT "PK_686b14de8f81975640ad48314b7" PRIMARY KEY ("id_consulta"))`);
        await queryRunner.query(`CREATE TABLE "documentos" ("id_documento" SERIAL NOT NULL, "tipo" character varying(50) NOT NULL, "url_arquivo" character varying(255) NOT NULL, "dt_upload" TIMESTAMP NOT NULL DEFAULT now(), "criado_na_plataforma" boolean NOT NULL, "visivel_paciente" boolean NOT NULL DEFAULT true, "observacoes" text, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "paciente_id" integer, "profissional_id" integer, "consulta_id" integer, CONSTRAINT "PK_5199fd6741196c6fac810bbbb4b" PRIMARY KEY ("id_documento"))`);
        await queryRunner.query(`CREATE TABLE "avaliacoes" ("id_avaliacao" SERIAL NOT NULL, "nota" integer NOT NULL, "comentario" text, "dt_avaliacao" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "paciente_cpf" character varying(14), "consulta_id" integer, "exame_id" integer, "profissional_cpf" character varying(14), "unidade_id" character varying(14), CONSTRAINT "PK_1b471a2e98b3f98841af3cf1601" PRIMARY KEY ("id_avaliacao"))`);
        await queryRunner.query(`CREATE TABLE "exam_payments" ("id_pagamento" SERIAL NOT NULL, "metodo_pagamento" character varying(50) NOT NULL, "tipo" character varying(50) NOT NULL, "valor" numeric NOT NULL, "parcelas" integer, "status" character varying(20) NOT NULL DEFAULT 'Confirmado', "id_mp_payment" integer NOT NULL, "data_pagamento" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb73d7f35dd23b55f6688d05e1c" PRIMARY KEY ("id_pagamento"))`);
        await queryRunner.query(`CREATE TABLE "exam_agendamentos" ("id_agendamento" SERIAL NOT NULL, "data_hora" TIMESTAMP NOT NULL, "status_pagamento" character varying(20) NOT NULL DEFAULT 'Pendente', "lembrete_enviado" boolean NOT NULL DEFAULT false, "altura_m" double precision, "peso_kg" double precision, "pressao_sistolica" integer, "pressao_diastolica" integer, "atualizar_minha_saude" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_usuario_paciente" integer, "id_exame" integer, "id_pagamento" integer, CONSTRAINT "PK_6323fc04619163940bcc60e81e8" PRIMARY KEY ("id_agendamento"))`);
        await queryRunner.query(`ALTER TABLE "clinic_exams" ADD CONSTRAINT "FK_a1e371fac3e5c756cd425476d7e" FOREIGN KEY ("id_clinica") REFERENCES "clinics"("id_clinica") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clinic_promotions" ADD CONSTRAINT "FK_1c66f5173b72ac6a60288d81466" FOREIGN KEY ("id_clinica") REFERENCES "clinics"("id_clinica") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_45ccd6cc69ed50ea847e72b7f83" FOREIGN KEY ("id_usuario") REFERENCES "users"("id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios_contatos" ADD CONSTRAINT "FK_4e0b7f7df014fc2a35520c131ea" FOREIGN KEY ("usuario_id") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios_contatos" ADD CONSTRAINT "FK_929c188e390203097af7c48f316" FOREIGN KEY ("contato_id") REFERENCES "contatos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "conexoes_profissionais_clinicas" ADD CONSTRAINT "FK_20dfde8f6b30168ef1a21654fb4" FOREIGN KEY ("id_profissional") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "conexoes_profissionais_clinicas" ADD CONSTRAINT "FK_34a46aafae29c8330afd56d6401" FOREIGN KEY ("id_clinica") REFERENCES "clinics"("id_clinica") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_aa2fd3c15136dcbdd4ff7b8d7b0" FOREIGN KEY ("id_clinica") REFERENCES "clinics"("id_clinica") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" ADD CONSTRAINT "FK_1145c1ebf4fa5c00d70ded53b68" FOREIGN KEY ("id_usuario_paciente") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" ADD CONSTRAINT "FK_2e3b388e1e230d6f29b7a1bdde5" FOREIGN KEY ("id_usuario_profissional") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" ADD CONSTRAINT "FK_3a7508a2844080bef163bb325b3" FOREIGN KEY ("id_clinica") REFERENCES "clinics"("id_clinica") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documentos" ADD CONSTRAINT "FK_38d653c5caf210e161485ae37a2" FOREIGN KEY ("paciente_id") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documentos" ADD CONSTRAINT "FK_f38ad347047e505ef65ad3fbe5f" FOREIGN KEY ("profissional_id") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documentos" ADD CONSTRAINT "FK_5aab5e2470b9346471b70b0d0ce" FOREIGN KEY ("consulta_id") REFERENCES "agendamentos_consultas"("id_consulta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_5ce48512537a93a8a4e9554545e" FOREIGN KEY ("paciente_cpf") REFERENCES "users"("cpfcnpj") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_c345ff58b7c6e878f940b845da0" FOREIGN KEY ("consulta_id") REFERENCES "agendamentos_consultas"("id_consulta") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_77782681bee65c686f9ad462631" FOREIGN KEY ("exame_id") REFERENCES "documentos"("id_documento") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_666eafc5a6fe8e70e0081001e97" FOREIGN KEY ("profissional_cpf") REFERENCES "users"("cpfcnpj") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" ADD CONSTRAINT "FK_7c695739680a42f5ab8a22979e1" FOREIGN KEY ("unidade_id") REFERENCES "clinics"("cnpj") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" ADD CONSTRAINT "FK_562513196577a72b67e7883a65e" FOREIGN KEY ("id_usuario_paciente") REFERENCES "users"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" ADD CONSTRAINT "FK_e0b1b356951d9b1af252c85bdc9" FOREIGN KEY ("id_exame") REFERENCES "clinic_exams"("id_exame") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" ADD CONSTRAINT "FK_62a7b22d732c049c2ca0897a9e0" FOREIGN KEY ("id_pagamento") REFERENCES "exam_payments"("id_pagamento") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" DROP CONSTRAINT "FK_62a7b22d732c049c2ca0897a9e0"`);
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" DROP CONSTRAINT "FK_e0b1b356951d9b1af252c85bdc9"`);
        await queryRunner.query(`ALTER TABLE "exam_agendamentos" DROP CONSTRAINT "FK_562513196577a72b67e7883a65e"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_7c695739680a42f5ab8a22979e1"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_666eafc5a6fe8e70e0081001e97"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_77782681bee65c686f9ad462631"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_c345ff58b7c6e878f940b845da0"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes" DROP CONSTRAINT "FK_5ce48512537a93a8a4e9554545e"`);
        await queryRunner.query(`ALTER TABLE "documentos" DROP CONSTRAINT "FK_5aab5e2470b9346471b70b0d0ce"`);
        await queryRunner.query(`ALTER TABLE "documentos" DROP CONSTRAINT "FK_f38ad347047e505ef65ad3fbe5f"`);
        await queryRunner.query(`ALTER TABLE "documentos" DROP CONSTRAINT "FK_38d653c5caf210e161485ae37a2"`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" DROP CONSTRAINT "FK_3a7508a2844080bef163bb325b3"`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" DROP CONSTRAINT "FK_2e3b388e1e230d6f29b7a1bdde5"`);
        await queryRunner.query(`ALTER TABLE "agendamentos_consultas" DROP CONSTRAINT "FK_1145c1ebf4fa5c00d70ded53b68"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_aa2fd3c15136dcbdd4ff7b8d7b0"`);
        await queryRunner.query(`ALTER TABLE "conexoes_profissionais_clinicas" DROP CONSTRAINT "FK_34a46aafae29c8330afd56d6401"`);
        await queryRunner.query(`ALTER TABLE "conexoes_profissionais_clinicas" DROP CONSTRAINT "FK_20dfde8f6b30168ef1a21654fb4"`);
        await queryRunner.query(`ALTER TABLE "usuarios_contatos" DROP CONSTRAINT "FK_929c188e390203097af7c48f316"`);
        await queryRunner.query(`ALTER TABLE "usuarios_contatos" DROP CONSTRAINT "FK_4e0b7f7df014fc2a35520c131ea"`);
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_45ccd6cc69ed50ea847e72b7f83"`);
        await queryRunner.query(`ALTER TABLE "clinic_promotions" DROP CONSTRAINT "FK_1c66f5173b72ac6a60288d81466"`);
        await queryRunner.query(`ALTER TABLE "clinic_exams" DROP CONSTRAINT "FK_a1e371fac3e5c756cd425476d7e"`);
        await queryRunner.query(`DROP TABLE "exam_agendamentos"`);
        await queryRunner.query(`DROP TABLE "exam_payments"`);
        await queryRunner.query(`DROP TABLE "avaliacoes"`);
        await queryRunner.query(`DROP TABLE "documentos"`);
        await queryRunner.query(`DROP TABLE "agendamentos_consultas"`);
        await queryRunner.query(`DROP TABLE "clinics"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "conexoes_profissionais_clinicas"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "usuarios_contatos"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
        await queryRunner.query(`DROP TABLE "clinic_promotions"`);
        await queryRunner.query(`DROP TABLE "clinic_exams"`);
    }
}
exports.InitialSchema1756858235362 = InitialSchema1756858235362;
//# sourceMappingURL=1756858235362-InitialSchema.js.map