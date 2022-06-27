const { Router } = require("express");
const Controller = require("../controllers/Cotacao_ItensController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Cotação Itens
 *   description: Manipulação de itens de cotação
 */

/**
 * @openapi
 * /cotacaoitens/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos cabecalhos de cotação
 *    tags: [Cotação Itens]
 *    parameters:
 *      - name: id
 *        description: Informe cógigo da cotação.
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
  "/cotacaoitens/todos/:id",
  JWTController.Verifica,
  helper.checkPermission("cotacao_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /cotacaoitens/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um item pelo ID
 *    tags: [Cotação Itens]
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
  "/cotacaoitens/:id",
  JWTController.Verifica,
  helper.checkPermission("cotacao_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /cotacaoitens/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo item de cotação
 *    tags: [Cotação Itens]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            COTACAO_ID:
 *              description: Informe o ID da cotação.
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
 *            VALORORIGINAL:
 *              description: Informe o valor original.
 *              type: number
 *            VALORUNT:
 *              description: Informe o valor unitário.
 *              type: number
 *            VALORTOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            DESCONTOPERC:
 *              description: Informe o percentual de desconto.
 *              type: number
 *            DESCONTOVALOR:
 *              description: Informe o valor de desconto.
 *              type: integer
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
  "/cotacaoitens/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("cotacao_criar"),
  Controller.cria
);

/**
 * @openapi
 * /cotacaoitens/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um item de cotação
 *    tags: [Cotação Itens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da cotação.
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
 *            COTACAO_ID:
 *              description: Informe o ID da cotação.
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
 *            VALORORIGINAL:
 *              description: Informe o valor original.
 *              type: number
 *            VALORUNT:
 *              description: Informe o valor unitário.
 *              type: number
 *            VALORTOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            DESCONTOPERC:
 *              description: Informe o percentual de desconto.
 *              type: number
 *            DESCONTOVALOR:
 *              description: Informe o valor de desconto.
 *              type: integer
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
  "/cotacaoitens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("cotacao_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /cotacaoitens/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um item
 *    tags: [Cotação Itens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da cotação.
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
  "/cotacaoitens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("cotacao_apagar"),
  Controller.apaga
);

module.exports = router;
