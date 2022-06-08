const { Router } = require("express");
const Controller = require("../controllers/usuariosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();

/**
 * @openapi
 * /usuarios:
 *  get:
 *    summary: Todos
 *    description: Pega todos usuários
 *    tags: [Usuarios]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/usuarios", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /usuarios/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os usuários apagados
 *    tags: [Usuarios]
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
    "/usuarios/apagados",
    JWTController.Verifica,
    Controller.pegaApagados
);

/**
 * @openapi
 * /usuarios/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um usuário apagado
 *    tags: [Usuarios]
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
    "/usuarios/apagados/:id",
    JWTController.Verifica,
    Controller.pegaApagado
);
/**
 * @openapi
 * /usuarios/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um usuário pelo ID
 *    tags: [Usuarios]
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
router.get("/usuarios/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /usuarios/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo usuário
 *    tags: [Usuarios]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            FUN_MSOCIAL:
 *              summary: Numero matricula eSocial
 *              type: String
 *            FUN_NOME:
 *              summary: Nome
 *              type: String
 *            FUN_NOME_MAE:
 *              summary: Nome da mae
 *              type: String
 *            FUN_NOME_PAI:
 *              summary: Nome do pai
 *              type: String
 *            FUN_SEXO:
 *              summary:  Sexo (M ou F)
 *              type: String
 *            FUN_NASCIMENTO:
 *              summary: Data de nascimento (YYYYMMDD)
 *              type: String
 *            FUN_EST_CIVIL:
 *              summary: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: String
 *            FUN_NACIONALIDADE:
 *              summary: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              summary: Email
 *              type: String
 *            FUN_DEFICIENTE:
 *              summary: Deficiente usuário true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              summary: Observação da deficiencia
 *              type: String
 *            FUN_DATA_ADMISSAO:
 *              summary: Data de admissão (YYYYMMDD)
 *              type: String
 *            FUN_DATA_DEMISSAO:
 *              summary: Data de demissão (YYYYMMDD)
 *              type: String
 *            FUN_RECEB_BANCO:
 *              summary: Nome do banco
 *              type: String
 *            FUN_RECEB_AG:
 *              summary: Agência do banco
 *              type: String
 *            FUN_RECEB_CONTA:
 *              summary: Conta do banco
 *              type: String
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
 *              type: String
 *            FUN_P_ADIANTAMENTO:
 *              summary: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              summary: CPF
 *              type: String
 *            FUN_PIS:
 *              summary: PIS
 *              type: String
 *            FUN_RG:
 *              summary: RG
 *              type: String
 *            FUN_RG_EMISSAO:
 *              summary: Data de emissão do RG (YYYYMMDD)
 *              type: String
 *            FUN_RG_UF:
 *              summary: UF do RG
 *              type: String
 *            FUN_RG_OEM:
 *              summary: Órgão emissor do RG
 *              type: String
 *            FUN_END_RUA:
 *              summary: Rua do endereço
 *              type: String
 *            FUN_END_NUMERO:
 *              summary: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              summary: Bairro do endereço
 *              type: String
 *            FUN_END_COMP:
 *              summary: Complemento do endereço
 *              type: String
 *            FUN_END_MUNICIPIO:
 *              summary: Município do endereço
 *              type: String
 *            FUN_END_EST:
 *              summary: Estado do endereço
 *              type: String
 *            FUN_END_CEP:
 *              summary: CEP do endereço
 *              type: String
 *            FUN_TEL_DDD:
 *              summary: DDD do telefone
 *              type: String
 *            FUN_TEL_NUMERO:
 *              summary: Número do telefone
 *              type: String
 *            FUN_CELULAR_DDD:
 *              summary: DDD do celular
 *              type: String
 *            FUN_CELULAR_NUMERO:
 *              summary: Número do celular
 *              type: String
 *            FUN_EMER_CONTATO:
 *              summary: Nome do contato de emergência
 *              type: String
 *            FUN_EMER_DDD:
 *              summary: DDD do telefone de emergência
 *              type: String
 *            FUN_EMER_NUMERO:
 *              summary: Número do telefone de emergência
 *              type: String
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
    "/usuarios/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /usuarios/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Usuarios]
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
    "/usuarios/:id/restaura",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.restaura
);
/**
 * @openapi
 * /usuarios/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um usuário
 *    tags: [Usuarios]
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
 *              type: String
 *            FUN_NOME:
 *              summary: Nome
 *              type: String
 *            FUN_NOME_MAE:
 *              summary: Nome da mae
 *              type: String
 *            FUN_NOME_PAI:
 *              summary: Nome do pai
 *              type: String
 *            FUN_SEXO:
 *              summary:  Sexo (M ou F)
 *              type: String
 *            FUN_NASCIMENTO:
 *              summary: Data de nascimento (YYYYMMDD)
 *              type: String
 *            FUN_EST_CIVIL:
 *              summary: Estado civil 1- Solteiro 2- Casado 3- Divorciado 4- Viúvo
 *              type: String
 *            FUN_NACIONALIDADE:
 *              summary: Nacionalidade
 *              type: integer
 *            FUN_EMAIL:
 *              summary: Email
 *              type: String
 *            FUN_DEFICIENTE:
 *              summary: Deficiente usuário true ou false
 *              type: boolean
 *            FUN_OBS_DEFICIENCIA:
 *              summary: Observação da deficiencia
 *              type: String
 *            FUN_DATA_ADMISSAO:
 *              summary: Data de admissão (YYYYMMDD)
 *              type: String
 *            FUN_DATA_DEMISSAO:
 *              summary: Data de demissão (YYYYMMDD)
 *              type: String
 *            FUN_RECEB_BANCO:
 *              summary: Nome do banco
 *              type: String
 *            FUN_RECEB_AG:
 *              summary: Agência do banco
 *              type: String
 *            FUN_RECEB_CONTA:
 *              summary: Conta do banco
 *              type: String
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
 *              type: String
 *            FUN_P_ADIANTAMENTO:
 *              summary: Percentual de adiantamento
 *              type: number
 *            FUN_CPF:
 *              summary: CPF
 *              type: String
 *            FUN_PIS:
 *              summary: PIS
 *              type: String
 *            FUN_RG:
 *              summary: RG
 *              type: String
 *            FUN_RG_EMISSAO:
 *              summary: Data de emissão do RG (YYYYMMDD)
 *              type: String
 *            FUN_RG_UF:
 *              summary: UF do RG
 *              type: String
 *            FUN_RG_OEM:
 *              summary: Órgão emissor do RG
 *              type: String
 *            FUN_END_RUA:
 *              summary: Rua do endereço
 *              type: String
 *            FUN_END_NUMERO:
 *              summary: Número do endereço
 *              type: integer
 *            FUN_END_BAIRRO:
 *              summary: Bairro do endereço
 *              type: String
 *            FUN_END_COMP:
 *              summary: Complemento do endereço
 *              type: String
 *            FUN_END_MUNICIPIO:
 *              summary: Município do endereço
 *              type: String
 *            FUN_END_EST:
 *              summary: Estado do endereço
 *              type: String
 *            FUN_END_CEP:
 *              summary: CEP do endereço
 *              type: String
 *            FUN_TEL_DDD:
 *              summary: DDD do telefone
 *              type: String
 *            FUN_TEL_NUMERO:
 *              summary: Número do telefone
 *              type: String
 *            FUN_CELULAR_DDD:
 *              summary: DDD do celular
 *              type: String
 *            FUN_CELULAR_NUMERO:
 *              summary: Número do celular
 *              type: String
 *            FUN_EMER_CONTATO:
 *              summary: Nome do contato de emergência
 *              type: String
 *            FUN_EMER_DDD:
 *              summary: DDD do telefone de emergência
 *              type: String
 *            FUN_EMER_NUMERO:
 *              summary: Número do telefone de emergência
 *              type: String
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
    "/usuarios/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /usuarios/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um usuário
 *    tags: [Usuarios]
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
    "/usuarios/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

module.exports = router;