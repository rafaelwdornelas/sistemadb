const { Router } = require("express");
const Controller = require("../controllers/ClientesFamiliasController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: CliFamilias
 *   description: Manipulação das Familias de Clientes
 */

/**
 * @openapi
 * /clifamilias:
 *  get:
 *    summary: Todos
 *    description: Pega todos os Familias com Paginação
 *    tags: [CliFamilias]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/clifamilias", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /clifamilias/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todas as Familias Apagadas
 *    tags: [CliFamilias]
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
    "/clifamilias/apagados",
    JWTController.Verifica,
    Controller.pegaApagados
);

/**
 * @openapi
 * /clifamilias/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Retorna uma Familia Apagada
 *    tags: [CliFamilias]
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
    "/clifamilias/apagados/:id",
    JWTController.Verifica,
    Controller.pegaApagado
);
/**
 * @openapi
 * /clifamilias/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Visualiza os Dados de uma Família
 *    tags: [CliFamilias]
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
router.get("/clifamilias/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /clifamilias/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um Família no Banco de Dados
 *    tags: [CliFamilias]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            NOME:
 *              summary: Nome da Família
 *              type: string
 *            DESCONTO:
 *              summary: Percentual de Desconto
 *              type: string
 *            RESTRITO:
 *              summary: Família Restrita para Moviventação?
 *              type: boolean
 *              example: false
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
    "/clifamilias/novo",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.cria
);
/**
 * @openapi
 * /clifamilias/{id}/restaura:
 *  post:
 *    summary: Restaura deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [CliFamilias]
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
    "/clifamilias/:id/restaura",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.restaura
);
/**
 * @openapi
 * /clifamilias/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera os Dados de uma Família no Banco de Dados
 *    tags: [CliFamilias]
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
 *            NOME:
 *              summary: Nome da Família
 *              type: string
 *            DESCONTO:
 *              summary: Percentual de Desconto
 *              type: string
 *            RESTRITO:
 *              summary: Família Restrita para Moviventação?
 *              type: boolean
 *              example: false
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
    "/clifamilias/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.atualiza
);
/**
 * @openapi
 * /clifamilias/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta o cadastro de uma Família
 *    tags: [CliFamilias]
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
    "/clifamilias/:id",
    LicencaController.Verifica,
    JWTController.Verifica,
    Controller.apaga
);

/**
 * @openapi
 * /clifamilias/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca no Banco de Dados
 *    tags: [CliFamilias]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            busca:
 *              summary: string para busca
 *              type: string
 *              example: "GER"
 *            inicio:
 *              summary: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              summary: limite de registros da paginação
 *              type: integer
 *              example: 10
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
    "/clifamilias/busca",
    JWTController.Verifica,
    Controller.buscaRegistroCount
);

module.exports = router;