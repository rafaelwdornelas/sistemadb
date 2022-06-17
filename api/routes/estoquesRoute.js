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
 *  get:
 *    summary: Todos
 *    description: Pega todos Estoques de Produtos
 *    tags: [Estoques de Produtos]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/estoques", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /estoques/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos estoques de produtos apagadas
 *    tags: [Estoques de Produtos]
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
  "/estoques/apagados",
  JWTController.Verifica,
  Controller.pegaApagados
);

/**
 * @openapi
 * /estoques/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um estoque de produto apagado
 *    tags: [Estoques de Produtos]
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
  "/estoques/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /estoques/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um estoque de produto pelo ID
 *    tags: [Estoques de Produtos]
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
 *            PROD_NOME:
 *              summary: Nome da família
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
 * /estoques/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um estoque de produto apagado
 *    tags: [Estoques de Produtos]
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
  "/estoques/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
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
 *            PROD_NOME:
 *              summary: Nome da família
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
  "/estoques/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
