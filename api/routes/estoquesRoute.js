const { Router } = require("express");
const Controller = require("../controllers/estoquesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Estoques de Produtos
 *   description: Manipulação de Estoques de Produtos
 */

/**
 * @openapi
 * /estoques:
 *  post:
 *    summary: Todos
 *    description: Pega todos Estoques de Produtos
 *    tags: [Estoques de Produtos]
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
router.post("/estoques", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /estoques/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um estoque de produto pelo ID
 *    tags: [Estoques de Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do estoque de produto.
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
router.get("/estoques/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /estoques/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo estoque de produto
 *    tags: [Estoques de Produtos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            ARMAZEM:
 *              summary: Armazém do estoque de produto
 *              type: integer
 *            PRODUTO:
 *              summary: Código do produto
 *              type: integer
 *            QUANTIDADE:
 *              summary: Quantidade do estoque de produto
 *              type: number
 *            FABRICACAO:
 *              summary: Data de fabricação do produto
 *              type: string
 *            VALIDADE:
 *              summary: Data de validade do produto
 *              type: string
 *            LOTE:
 *              summary: Lote do produto
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
  "/estoques/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);

/**
 * @openapi
 * /estoques/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um estoque de produto
 *    tags: [Estoques de Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do estoque de produto.
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
 *            ARMAZEM:
 *              summary: Armazém do estoque de produto
 *              type: integer
 *            PRODUTO:
 *              summary: Código do produto
 *              type: integer
 *            QUANTIDADE:
 *              summary: Quantidade do estoque de produto
 *              type: number
 *            FABRICACAO:
 *              summary: Data de fabricação do produto
 *              type: string
 *            VALIDADE:
 *              summary: Data de validade do produto
 *              type: string
 *            LOTE:
 *              summary: Lote do produto
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
  "/estoques/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /estoques/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um estoque de produto
 *    tags: [Estoques de Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do estoque de produto.
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
  "/estoques/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
