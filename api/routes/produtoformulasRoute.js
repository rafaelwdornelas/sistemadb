const { Router } = require("express");
const Controller = require("../controllers/ProdutoFormulasController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produto Fórmulas
 *   description: Manipulação de Fórmulas de Produtos
 */

/**
 * @openapi
 * /prodformulas/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos Itens da Fórmula de um Produto
 *    tags: [Produto Fórmulas]
 *    parameters:
 *      - name: id
 *        description: Informe código do produto.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
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
 *
 */
router.get(
  "/prodformulas/todos/:id",
  JWTController.Verifica,
  Controller.pegaTodos
);

/**
 * @openapi
 * /prodformulas/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza um item da fórmula pelo ID
 *    tags: [Produto Fórmulas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
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
 *
 */
router.get("/prodformulas/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /prodformulas/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo item da fórmula
 *    tags: [Produto Fórmulas]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            PRODUTO:
 *              description: Código do Produto Principal
 *              type: integer
 *            ITEM:
 *              description: Código do Produto da fórmula
 *              type: integer
 *            QUANTIDADE:
 *              description: Quantidade
 *              type: number
 *    responses:
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
 *
 */
router.post(
  "/prodformulas/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);

/**
 * @openapi
 * /prodformulas/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de uma fórmula
 *    tags: [Produto Fórmulas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da fórmula.
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
 *            PRODUTO:
 *              description: Código do Produto Principal
 *              type: integer
 *            ITEM:
 *              description: Código do Produto da fórmula
 *              type: integer
 *            QUANTIDADE:
 *              description: Quantidade
 *              type: number
 *    responses:
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
 *
 */
router.put(
  "/prodformulas/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /prodformulas/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta uma fórmula
 *    tags: [Produto Fórmulas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da fórmula.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *    responses:
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
 *
 */
router.delete(
  "/prodformulas/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
