const { Router } = require("express");
const Controller = require("../controllers/FornecedorNotaLinksController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Fornecedor Nota Links
 *   description: Manipulação de links entre código do produto interno e código do produto da nota
 */

/**
 * @openapi
 * /fornecedornotalinks:
 *  post:
 *    summary: Todos
 *    description: Pega todos links entre código do produto interno e código do produto da nota
 *    tags: [Fornecedor Nota Links]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
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
  "/fornecedornotalinks",
  JWTController.Verifica,
  Controller.pegaTodos
);

/**
 * @openapi
 * /fornecedornotalinks/fornecedor/{id}:
 *  post:
 *    summary: Todos por fornecedor
 *    description: Pega todos links de um fornecedor especifico
 *    tags: [Fornecedor Nota Links]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do fornecedor.
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
  "/fornecedornotalinks/fornecedor/:id",
  JWTController.Verifica,
  Controller.pegaTodosfornecedor
);

/**
 * @openapi
 * /fornecedornotalinks/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza um link pelo ID
 *    tags: [Fornecedor Nota Links]
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
router.get("/fornecedornotalinks/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /fornecedornotalinks/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo link
 *    tags: [Fornecedor Nota Links]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            FORNECEDOR:
 *              summary: Código do Fornecedor
 *              type: integer
 *            PRODUTO:
 *              summary: Código do Produto interno
 *              type: integer
 *            COD_FORNECEDOR:
 *              summary: código do produto da nota
 *              type: string
 *            MULTIPLICADOR:
 *              summary: Multiplicador do produto da nota para o produto interno
 *              type: number
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
  "/fornecedornotalinks/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /fornecedornotalinks/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um link
 *    tags: [Fornecedor Nota Links]
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
 *            FORNECEDOR:
 *              summary: Código do Fornecedor
 *              type: integer
 *            PRODUTO:
 *              summary: Código do Produto interno
 *              type: integer
 *            COD_FORNECEDOR:
 *              summary: código do produto da nota
 *              type: string
 *            MULTIPLICADOR:
 *              summary: Multiplicador do produto da nota para o produto interno
 *              type: number
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
  "/fornecedornotalinks/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /fornecedornotalinks/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um link
 *    tags: [Fornecedor Nota Links]
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
  "/fornecedornotalinks/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
