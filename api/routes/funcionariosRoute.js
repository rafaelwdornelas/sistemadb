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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *              summary: Numero matricula eSocial
 *              type: string
 *            FUN_NOME:
 *              summary: Nome
 *              type: string
 *            FUN_NOME_MAE:
 *              summary: Nome da mae
 *              type: string
 *            FUN_NOME_PAI:
 *              summary: Nome do pai
 *              type: string
 *            FUN_SEXO:
 *              summary:  Sexo (M ou F)
 *              type: string
 *            FUN_NASCIMENTO:
 *              summary: Data de nascimento (YYYYMMDD)
 *              type: string
 *            FUN_EST_CIVIL:
 *              summary: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: string
 *            FUN_NACIONALIDADE:
 *              summary: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              summary: Email
 *              type: string
 *            FUN_DEFICIENTE:
 *              summary: Deficiente funcionario true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              summary: Observação da deficiencia
 *              type: string
 *            FUN_DATA_ADMISSAO:
 *              summary: Data de admissão (YYYYMMDD)
 *              type: string
 *            FUN_DATA_DEMISSAO:
 *              summary: Data de demissão (YYYYMMDD)
 *              type: string
 *            FUN_RECEB_BANCO:
 *              summary: Nome do banco
 *              type: string
 *            FUN_RECEB_AG:
 *              summary: Agência do banco
 *              type: string
 *            FUN_RECEB_CONTA:
 *              summary: Conta do banco
 *              type: string
 *            FUN_GRUPO:
 *              summary: Grupo
 *              type: integer
 *            FUN_CARGO:
 *              summary: Cargo
 *              type: integer
 *            FUN_SALARIO:
 *              summary: Salário
 *              type: number
 *            FUN_TIPO_CONTRATO:
 *              summary: Tipo de contrato 1- CLT 2- PJ 3- PJ/CLT
 *              type: integer
 *            FUN_DATA_FIM_CONTRATO:
 *              summary: Data de fim do contrato (YYYYMMDD)
 *              type: string
 *            FUN_P_ADIANTAMENTO:
 *              summary: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              summary: CPF
 *              type: string
 *            FUN_PIS:
 *              summary: PIS
 *              type: string
 *            FUN_RG:
 *              summary: RG
 *              type: string
 *            FUN_RG_EMISSAO:
 *              summary: Data de emissão do RG (YYYYMMDD)
 *              type: string
 *            FUN_RG_UF:
 *              summary: UF do RG
 *              type: string
 *            FUN_RG_OEM:
 *              summary: Órgão emissor do RG
 *              type: string
 *            FUN_END_RUA:
 *              summary: Rua do endereço
 *              type: string
 *            FUN_END_NUMERO:
 *              summary: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              summary: Bairro do endereço
 *              type: string
 *            FUN_END_COMP:
 *              summary: Complemento do endereço
 *              type: string
 *            FUN_END_MUNICIPIO:
 *              summary: Município do endereço
 *              type: string
 *            FUN_END_EST:
 *              summary: Estado do endereço
 *              type: string
 *            FUN_END_CEP:
 *              summary: CEP do endereço
 *              type: string
 *            FUN_TEL_DDD:
 *              summary: DDD do telefone
 *              type: string
 *            FUN_TEL_NUMERO:
 *              summary: Número do telefone
 *              type: string
 *            FUN_CELULAR_DDD:
 *              summary: DDD do celular
 *              type: string
 *            FUN_CELULAR_NUMERO:
 *              summary: Número do celular
 *              type: string
 *            FUN_EMER_CONTATO:
 *              summary: Nome do contato de emergência
 *              type: string
 *            FUN_EMER_DDD:
 *              summary: DDD do telefone de emergência
 *              type: string
 *            FUN_EMER_NUMERO:
 *              summary: Número do telefone de emergência
 *              type: string
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *              summary: Numero matricula eSocial
 *              type: string
 *            FUN_NOME:
 *              summary: Nome
 *              type: string
 *            FUN_NOME_MAE:
 *              summary: Nome da mae
 *              type: string
 *            FUN_NOME_PAI:
 *              summary: Nome do pai
 *              type: string
 *            FUN_SEXO:
 *              summary:  Sexo (M ou F)
 *              type: string
 *            FUN_NASCIMENTO:
 *              summary: Data de nascimento (YYYYMMDD)
 *              type: string
 *            FUN_EST_CIVIL:
 *              summary: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: string
 *            FUN_NACIONALIDADE:
 *              summary: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              summary: Email
 *              type: string
 *            FUN_DEFICIENTE:
 *              summary: Deficiente funcionario true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              summary: Observação da deficiencia
 *              type: string
 *            FUN_DATA_ADMISSAO:
 *              summary: Data de admissão (YYYYMMDD)
 *              type: string
 *            FUN_DATA_DEMISSAO:
 *              summary: Data de demissão (YYYYMMDD)
 *              type: string
 *            FUN_RECEB_BANCO:
 *              summary: Nome do banco
 *              type: string
 *            FUN_RECEB_AG:
 *              summary: Agência do banco
 *              type: string
 *            FUN_RECEB_CONTA:
 *              summary: Conta do banco
 *              type: string
 *            FUN_GRUPO:
 *              summary: Grupo
 *              type: integer
 *            FUN_CARGO:
 *              summary: Cargo
 *              type: integer
 *            FUN_SALARIO:
 *              summary: Salário
 *              type: number
 *            FUN_TIPO_CONTRATO:
 *              summary: Tipo de contrato 1- CLT 2- PJ 3- PJ/CLT
 *              type: integer
 *            FUN_DATA_FIM_CONTRATO:
 *              summary: Data de fim do contrato (YYYYMMDD)
 *              type: string
 *            FUN_P_ADIANTAMENTO:
 *              summary: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              summary: CPF
 *              type: string
 *            FUN_PIS:
 *              summary: PIS
 *              type: string
 *            FUN_RG:
 *              summary: RG
 *              type: string
 *            FUN_RG_EMISSAO:
 *              summary: Data de emissão do RG (YYYYMMDD)
 *              type: string
 *            FUN_RG_UF:
 *              summary: UF do RG
 *              type: string
 *            FUN_RG_OEM:
 *              summary: Órgão emissor do RG
 *              type: string
 *            FUN_END_RUA:
 *              summary: Rua do endereço
 *              type: string
 *            FUN_END_NUMERO:
 *              summary: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              summary: Bairro do endereço
 *              type: string
 *            FUN_END_COMP:
 *              summary: Complemento do endereço
 *              type: string
 *            FUN_END_MUNICIPIO:
 *              summary: Município do endereço
 *              type: string
 *            FUN_END_EST:
 *              summary: Estado do endereço
 *              type: string
 *            FUN_END_CEP:
 *              summary: CEP do endereço
 *              type: string
 *            FUN_TEL_DDD:
 *              summary: DDD do telefone
 *              type: string
 *            FUN_TEL_NUMERO:
 *              summary: Número do telefone
 *              type: string
 *            FUN_CELULAR_DDD:
 *              summary: DDD do celular
 *              type: string
 *            FUN_CELULAR_NUMERO:
 *              summary: Número do celular
 *              type: string
 *            FUN_EMER_CONTATO:
 *              summary: Nome do contato de emergência
 *              type: string
 *            FUN_EMER_DDD:
 *              summary: DDD do telefone de emergência
 *              type: string
 *            FUN_EMER_NUMERO:
 *              summary: Número do telefone de emergência
 *              type: string
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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