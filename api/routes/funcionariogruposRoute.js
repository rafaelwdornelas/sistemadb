const { Router } = require("express");
const Controller = require("../controllers/FuncionarioGruposController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Funcionario Grupos
 *   description: Manipulação de Grupo de Funcionários
 */

/**
 * @openapi
 * /funcionariogrupoas:
 *  get:
 *    summary: Todos
 *    description: Pega todos grupos de Funcionarios
 *    tags: [Funcionario Grupos]
 *    parameters:
 *      - name: id
 *        description: Informe cógido do cliente.
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
router.get("/funcionariogrupoas", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /funcionariogrupoas/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os endereços apagados
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupoas/apagados",
    JWTController.Verifica,
    Controller.pegaApagados
);

/**
 * @openapi
 * /funcionariogrupoas/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um endereço apagado
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupoas/apagados/:id",
    JWTController.Verifica,
    Controller.pegaApagado
);
/**
 * @openapi
 * /funcionariogrupoas/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um endereço pelo ID
 *    tags: [Funcionario Grupos]
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
router.get("/funcionariogrupoas/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /funcionariogrupoas/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo endereço
 *    tags: [Funcionario Grupos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            END_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              summary: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              summary: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              summary: Rua
 *              type: string
 *            END_NUMERO:
 *              summary: Numero
 *              type: integer
 *            END_BAIRRO:
 *              summary: Bairro
 *              type: string
 *            END_EST:
 *              summary: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              summary: Município
 *              type: string
 *            END_COMP:
 *              summary: Complemento
 *              type: string
 *            END_CODMUN:
 *              summary: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              summary: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              summary: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              summary: Código do País
 *              type: string
 *            END_NCPAIS:
 *              summary: Nome do País
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
    "/funcionariogrupoas/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /funcionariogrupoas/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupoas/:id/restaura",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.restaura
);
/**
 * @openapi
 * /funcionariogrupoas/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um endereço
 *    tags: [Funcionario Grupos]
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
 *            END_CLI:
 *              summary: Código do Cliente
 *              type: integer
 *            END_TIPO:
 *              summary: 1 - Principal , 2 - Cobrança , 3 - Entrega
 *              type: integer
 *            END_CEP:
 *              summary: CEP 10 digitos
 *              type: string
 *            END_RUA:
 *              summary: Rua
 *              type: string
 *            END_NUMERO:
 *              summary: Numero
 *              type: integer
 *            END_BAIRRO:
 *              summary: Bairro
 *              type: string
 *            END_EST:
 *              summary: Estado (UF)
 *              type: string
 *            END_MUNICIPIO:
 *              summary: Município
 *              type: string
 *            END_COMP:
 *              summary: Complemento
 *              type: string
 *            END_CODMUN:
 *              summary: Código do Município (IBGE)
 *              type: string
 *            END_REFERENCIA:
 *              summary: Ponto de Referência
 *              type: string
 *            END_REGIAO:
 *              summary: código da região do cliente
 *              type: string
 *            END_CPAIS:
 *              summary: Código do País
 *              type: string
 *            END_NCPAIS:
 *              summary: Nome do País
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
    "/funcionariogrupoas/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /funcionariogrupoas/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um endereço
 *    tags: [Funcionario Grupos]
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
    "/funcionariogrupoas/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

module.exports = router;