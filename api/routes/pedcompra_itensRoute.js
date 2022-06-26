const { Router } = require("express");
const Controller = require("../controllers/Pedcompra_ItensController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Ped. Compra Itens
 *   description: Manipulação de itens de pedido de compra
 */

/**
 * @openapi
 * /pedcompraitens/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos cabecalhos de pedido de compra
 *    tags: [Ped. Compra Itens]
 *    parameters:
 *      - name: id
 *        description: Informe cógigo do pedido de compra.
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
router.get(
  "/pedcompraitens/todos/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /pedcompraitens/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um item pelo ID
 *    tags: [Ped. Compra Itens]
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
router.get(
  "/pedcompraitens/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /pedcompraitens/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo item de pedido de compra
 *    tags: [Ped. Compra Itens]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            PEDCOMPRA_ID:
 *              description: Informe o ID do pedido de compra.
 *              type: integer
 *            PRODUTO:
 *              description: Informe o ID do produto.
 *              type: integer
 *            PRODUTOCOD:
 *              description: Informe o código do produto.
 *              type: string
 *            PRODUTODESC:
 *              description: Informe o nome do produto.
 *              type: string
 *            PRODUTOUND:
 *              description: Informe nome da unidade de medida.
 *              type: string
 *            QUANTIDADE:
 *              description: Informe a quantidade.
 *              type: number
 *            VALORUNT:
 *              description: Informe o valor unitário.
 *              type: number
 *            VALORTOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            NECESSIDADE:
 *              description: Informe a data da necessidade YYYYMMDD.
 *              type: string
 *            OBSITEM:
 *              description: Informe um observação do item.
 *              type: string
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
  "/pedcompraitens/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_criar"),
  Controller.cria
);

/**
 * @openapi
 * /pedcompraitens/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um item de pedido de compra
 *    tags: [Ped. Compra Itens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do pedido de compra.
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
 *            PEDCOMPRA_ID:
 *              description: Informe o ID do pedido de compra.
 *              type: integer
 *            PRODUTO:
 *              description: Informe o ID do produto.
 *              type: integer
 *            PRODUTOCOD:
 *              description: Informe o código do produto.
 *              type: string
 *            PRODUTODESC:
 *              description: Informe o nome do produto.
 *              type: string
 *            PRODUTOUND:
 *              description: Informe nome da unidade de medida.
 *              type: string
 *            QUANTIDADE:
 *              description: Informe a quantidade.
 *              type: number
 *            VALORUNT:
 *              description: Informe o valor unitário.
 *              type: number
 *            VALORTOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            NECESSIDADE:
 *              description: Informe a data da necessidade YYYYMMDD.
 *              type: string
 *            OBSITEM:
 *              description: Informe um observação do item.
 *              type: string
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
  "/pedcompraitens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /pedcompraitens/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um item
 *    tags: [Ped. Compra Itens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do pedido de compra.
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
  "/pedcompraitens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_apagar"),
  Controller.apaga
);

module.exports = router;
