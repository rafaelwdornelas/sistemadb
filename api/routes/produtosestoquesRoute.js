const { Router } = require("express");
const Controller = require("../controllers/estoquesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produtos Estoques
 *   description: Manipulação de Estoques de Produtos
 */

/**
 * @openapi
 * /estoques:
 *  post:
 *    summary: Todos
 *    description: Pega todos Estoques de Produtos
 *    tags: [Produtos Estoques]
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
 *    tags: [Produtos Estoques]
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
 *    tags: [Produtos Estoques]
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
 *    tags: [Produtos Estoques]
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
 *    tags: [Produtos Estoques]
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

/**
 * @openapi
 * /estoques/saldo/all/{id}:
 *  get:
 *    summary: Visualiza saldo produto
 *    description: Vizualiza o estoque de produto pelo ID em todos os armazens
 *    tags: [Produtos Estoques]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do produto.
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
  "/estoques/saldo/all/:id",
  JWTController.Verifica,
  Controller.getsaldoprodutoall
);

/**
 * @openapi
 * /estoques/saldo/{armazem}/{id}:
 *  get:
 *    summary: Visualiza saldo produto por armazem
 *    description: Vizualiza o estoque de produto pelo ID em um armazem
 *    tags: [Produtos Estoques]
 *    parameters:
 *      - name: armazem
 *        description: Informe o ID do armazem.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *      - name: id
 *        description: Informe o ID do produto.
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
  "/estoques/saldo/:armazem/:id",
  JWTController.Verifica,
  Controller.getsaldoprodutoarmazem
);

/**
 * @openapi
 * /estoques/validade/all/{data}:
 *  get:
 *    summary: Visualiza validade produto
 *    description: Vizualiza produtos perto de vencer em todos os armazens
 *    tags: [Produtos Estoques]
 *    parameters:
 *      - name: data
 *        description: Informe a data de vencimento máxima YYYYMMDD.
 *        required: true
 *        in: path
 *        schema:
 *         type: string
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
  "/estoques/validade/all/:data",
  JWTController.Verifica,
  Controller.getvalidadeprodutoall
);

/**
 * @openapi
 * /estoques/validade/{armazem}/{data}:
 *  get:
 *    summary: Visualiza validade produto por armazem
 *    description: Vizualiza produtos perto de vencer em um armazem
 *    tags: [Produtos Estoques]
 *    parameters:
 *      - name: armazem
 *        description: Informe o ID do armazem.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *      - name: data
 *        description: Informe a data de vencimento máxima YYYYMMDD.
 *        required: true
 *        in: path
 *        schema:
 *         type: string
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
  "/estoques/validade/:armazem/:data",
  JWTController.Verifica,
  Controller.getvalidadeprodutoarmazem
);

module.exports = router;
