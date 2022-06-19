const { Router } = require("express");
const Controller = require("../controllers/produtosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Manipulação de Produtos
 */

/**
 * @openapi
 * /produtos:
 *  get:
 *    summary: Todos
 *    description: Pega todos Produtos
 *    tags: [Produtos]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/produtos", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /produtos/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos produtos apagadas
 *    tags: [Produtos]
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
  "/produtos/apagados",
  JWTController.Verifica,
  Controller.pegaApagados
);

/**
 * @openapi
 * /produtos/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um armazem de produto apagado
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /produtos/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um armazem de produto pelo ID
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
router.get("/produtos/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /produtos/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo armazem de produto
 *    tags: [Produtos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            LOJA:
 *              summary: Informe o ID da loja.
 *              type: integer
 *            DESCRICAO:
 *              summary: Descrição do armazem de produto
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
  "/produtos/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /produtos/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um armazem de produto apagado
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
);
/**
 * @openapi
 * /produtos/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um armazem de produto
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
 *            LOJA:
 *              summary: Informe o ID da loja.
 *              type: integer
 *            DESCRICAO:
 *              summary: Descrição do armazem de produto
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
  "/produtos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /produtos/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um armazem de produto
 *    tags: [Produtos]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/produtos/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
