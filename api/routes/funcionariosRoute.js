const { Router } = require("express");
const Controller = require("../controllers/FuncionariosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Funcionarios
 *   description: Manipulação de Grupo de Funcionários
 */

/**
 * @openapi
 * /funcionarios:
 *  get:
 *    summary: Todos
 *    description: Pega todos Funcionarios
 *    tags: [Funcionarios]
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/funcionarios", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /funcionarios/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os funcionarios apagados
 *    tags: [Funcionarios]
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/funcionarios/apagados",
  JWTController.Verifica,
  Controller.pegaApagados
);

/**
 * @openapi
 * /funcionarios/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um funcionario apagado
 *    tags: [Funcionarios]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/funcionarios/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /funcionarios/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um funcionario pelo ID
 *    tags: [Funcionarios]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/funcionarios/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /funcionarios/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo funcionario
 *    tags: [Funcionarios]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            FUN_MSOCIAL:
 *              description: Numero matricula eSocial
 *              type: string
 *            FUN_NOME:
 *              description: Nome
 *              type: string
 *            FUN_NOME_MAE:
 *              description: Nome da mae
 *              type: string
 *            FUN_NOME_PAI:
 *              description: Nome do pai
 *              type: string
 *            FUN_SEXO:
 *              description:  Sexo (M ou F)
 *              type: string
 *            FUN_NASCIMENTO:
 *              description: Data de nascimento (YYYYMMDD)
 *              type: string
 *            FUN_EST_CIVIL:
 *              description: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: string
 *            FUN_NACIONALIDADE:
 *              description: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              description: Email
 *              type: string
 *            FUN_DEFICIENTE:
 *              description: Deficiente funcionario true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              description: Observação da deficiencia
 *              type: string
 *            FUN_DATA_ADMISSAO:
 *              description: Data de admissão (YYYYMMDD)
 *              type: string
 *            FUN_DATA_DEMISSAO:
 *              description: Data de demissão (YYYYMMDD)
 *              type: string
 *            FUN_RECEB_BANCO:
 *              description: Nome do banco
 *              type: string
 *            FUN_RECEB_AG:
 *              description: Agência do banco
 *              type: string
 *            FUN_RECEB_CONTA:
 *              description: Conta do banco
 *              type: string
 *            FUN_GRUPO:
 *              description: Grupo
 *              type: integer
 *            FUN_CARGO:
 *              description: Cargo
 *              type: integer
 *            FUN_SALARIO:
 *              description: Salário
 *              type: number
 *            FUN_TIPO_CONTRATO:
 *              description: Tipo de contrato 1- CLT 2- PJ 3- PJ/CLT
 *              type: integer
 *            FUN_DATA_FIM_CONTRATO:
 *              description: Data de fim do contrato (YYYYMMDD)
 *              type: string
 *            FUN_P_ADIANTAMENTO:
 *              description: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              description: CPF
 *              type: string
 *            FUN_PIS:
 *              description: PIS
 *              type: string
 *            FUN_RG:
 *              description: RG
 *              type: string
 *            FUN_RG_EMISSAO:
 *              description: Data de emissão do RG (YYYYMMDD)
 *              type: string
 *            FUN_RG_UF:
 *              description: UF do RG
 *              type: string
 *            FUN_RG_OEM:
 *              description: Órgão emissor do RG
 *              type: string
 *            FUN_END_RUA:
 *              description: Rua do endereço
 *              type: string
 *            FUN_END_NUMERO:
 *              description: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              description: Bairro do endereço
 *              type: string
 *            FUN_END_COMP:
 *              description: Complemento do endereço
 *              type: string
 *            FUN_END_MUNICIPIO:
 *              description: Município do endereço
 *              type: string
 *            FUN_END_EST:
 *              description: Estado do endereço
 *              type: string
 *            FUN_END_CEP:
 *              description: CEP do endereço
 *              type: string
 *            FUN_TEL_DDD:
 *              description: DDD do telefone
 *              type: string
 *            FUN_TEL_NUMERO:
 *              description: Número do telefone
 *              type: string
 *            FUN_CELULAR_DDD:
 *              description: DDD do celular
 *              type: string
 *            FUN_CELULAR_NUMERO:
 *              description: Número do celular
 *              type: string
 *            FUN_EMER_CONTATO:
 *              description: Nome do contato de emergência
 *              type: string
 *            FUN_EMER_DDD:
 *              description: DDD do telefone de emergência
 *              type: string
 *            FUN_EMER_NUMERO:
 *              description: Número do telefone de emergência
 *              type: string
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/funcionarios/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /funcionarios/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Funcionarios]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/funcionarios/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
);
/**
 * @openapi
 * /funcionarios/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um funcionario
 *    tags: [Funcionarios]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            FUN_MSOCIAL:
 *              description: Numero matricula eSocial
 *              type: string
 *            FUN_NOME:
 *              description: Nome
 *              type: string
 *            FUN_NOME_MAE:
 *              description: Nome da mae
 *              type: string
 *            FUN_NOME_PAI:
 *              description: Nome do pai
 *              type: string
 *            FUN_SEXO:
 *              description:  Sexo (M ou F)
 *              type: string
 *            FUN_NASCIMENTO:
 *              description: Data de nascimento (YYYYMMDD)
 *              type: string
 *            FUN_EST_CIVIL:
 *              description: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: string
 *            FUN_NACIONALIDADE:
 *              description: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              description: Email
 *              type: string
 *            FUN_DEFICIENTE:
 *              description: Deficiente funcionario true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              description: Observação da deficiencia
 *              type: string
 *            FUN_DATA_ADMISSAO:
 *              description: Data de admissão (YYYYMMDD)
 *              type: string
 *            FUN_DATA_DEMISSAO:
 *              description: Data de demissão (YYYYMMDD)
 *              type: string
 *            FUN_RECEB_BANCO:
 *              description: Nome do banco
 *              type: string
 *            FUN_RECEB_AG:
 *              description: Agência do banco
 *              type: string
 *            FUN_RECEB_CONTA:
 *              description: Conta do banco
 *              type: string
 *            FUN_GRUPO:
 *              description: Grupo
 *              type: integer
 *            FUN_CARGO:
 *              description: Cargo
 *              type: integer
 *            FUN_SALARIO:
 *              description: Salário
 *              type: number
 *            FUN_TIPO_CONTRATO:
 *              description: Tipo de contrato 1- CLT 2- PJ 3- PJ/CLT
 *              type: integer
 *            FUN_DATA_FIM_CONTRATO:
 *              description: Data de fim do contrato (YYYYMMDD)
 *              type: string
 *            FUN_P_ADIANTAMENTO:
 *              description: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              description: CPF
 *              type: string
 *            FUN_PIS:
 *              description: PIS
 *              type: string
 *            FUN_RG:
 *              description: RG
 *              type: string
 *            FUN_RG_EMISSAO:
 *              description: Data de emissão do RG (YYYYMMDD)
 *              type: string
 *            FUN_RG_UF:
 *              description: UF do RG
 *              type: string
 *            FUN_RG_OEM:
 *              description: Órgão emissor do RG
 *              type: string
 *            FUN_END_RUA:
 *              description: Rua do endereço
 *              type: string
 *            FUN_END_NUMERO:
 *              description: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              description: Bairro do endereço
 *              type: string
 *            FUN_END_COMP:
 *              description: Complemento do endereço
 *              type: string
 *            FUN_END_MUNICIPIO:
 *              description: Município do endereço
 *              type: string
 *            FUN_END_EST:
 *              description: Estado do endereço
 *              type: string
 *            FUN_END_CEP:
 *              description: CEP do endereço
 *              type: string
 *            FUN_TEL_DDD:
 *              description: DDD do telefone
 *              type: string
 *            FUN_TEL_NUMERO:
 *              description: Número do telefone
 *              type: string
 *            FUN_CELULAR_DDD:
 *              description: DDD do celular
 *              type: string
 *            FUN_CELULAR_NUMERO:
 *              description: Número do celular
 *              type: string
 *            FUN_EMER_CONTATO:
 *              description: Nome do contato de emergência
 *              type: string
 *            FUN_EMER_DDD:
 *              description: DDD do telefone de emergência
 *              type: string
 *            FUN_EMER_NUMERO:
 *              description: Número do telefone de emergência
 *              type: string
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.put(
  "/funcionarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /funcionarios/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um funcionario
 *    tags: [Funcionarios]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Família.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
 *      '200':
 *        description: Função executada com sucesso
 *      '400':
 *        description: Solicitação inválida
 *      '401':
 *        description: Usuário não autenticado
 *      '403':
 *        description: Usuário sem permissão
 *      '404':
 *        description: Solicitação indisponível
 *      '500':
 *        description: Erro interno do servidor
 *      '401':
 *        description: Unauthorized
 *
 */
router.delete(
  "/funcionarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
