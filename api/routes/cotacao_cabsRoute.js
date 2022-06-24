const { Router } = require("express");
const Controller = require("../controllers/Cotacao_CabsController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Cotação Cabecalho
 *   description: Manipulação de cabecalho de cotação
 */

/**
 * @openapi
 * /cotacaocabs:
 *  post:
 *    summary: Todos
 *    description: Pega todos cabecalhos de cotação
 *    tags: [Cotação Cabecalho]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            inicio:
 *              description: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              description: limite de registros da paginação
 *              type: integer
 *              example: 10
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
  "/cotacaocabs",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /cotacaocabs/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os cabecalhos apagados
 *    tags: [Cotação Cabecalho]
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
  "/cotacaocabs/apagados",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /cotacaocabs/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um cabecalho apagado
 *    tags: [Cotação Cabecalho]
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
  "/cotacaocabs/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /cotacaocabs/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um cabecalho pelo ID
 *    tags: [Cotação Cabecalho]
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
  "/cotacaocabs/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /cotacaocabs/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo cabecalho de cotação
 *    tags: [Cotação Cabecalho]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            CLIENTE:
 *              description: Informe o ID do cliente.
 *              type: integer
 *            LOJA:
 *              description: Informe o ID da Loja.
 *              type: integer
 *            VENDEDOR:
 *              description:  Informe o ID do vendedor.
 *              type: integer
 *            USUARIO:
 *              description: Informe o ID do usuário.
 *              type: integer
 *            STATUS:
 *              description: Informe o status do pedido.
 *              type: integer
 *            VALIDADE:
 *              description:  Informe a data de validade. YYYYMMDD
 *              type: string
 *            DESCONTOPERC:
 *              description: Informe o percentual de desconto.
 *              type: number
 *            DESCONTOVALOR:
 *              description: Informe o valor de desconto.
 *              type: number
 *            TOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            OBS:
 *              description: Informe a observação.
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
  "/cotacaocabs/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_criar"),
  Controller.cria
);
/**
 * @openapi
 * /cotacaocabs/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um cabecalho Deletado
 *    tags: [Cotação Cabecalho]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do cabecalho
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
router.post(
  "/cotacaocabs/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /cotacaocabs/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um cabecalho
 *    tags: [Cotação Cabecalho]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do cabecalho.
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
 *            CLIENTE:
 *              description: Informe o ID do cliente.
 *              type: integer
 *            LOJA:
 *              description: Informe o ID da Loja.
 *              type: integer
 *            VENDEDOR:
 *              description:  Informe o ID do vendedor.
 *              type: integer
 *            USUARIO:
 *              description: Informe o ID do usuário.
 *              type: integer
 *            STATUS:
 *              description: Informe o status do pedido.
 *              type: integer
 *            VALIDADE:
 *              description:  Informe a data de validade. YYYYMMDD
 *              type: string
 *            DESCONTOPERC:
 *              description: Informe o percentual de desconto.
 *              type: number
 *            DESCONTOVALOR:
 *              description: Informe o valor de desconto.
 *              type: number
 *            TOTAL:
 *              description: Informe o valor total.
 *              type: number
 *            OBS:
 *              description: Informe a observação.
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
  "/cotacaocabs/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /cotacaocabs/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um cabecalho
 *    tags: [Cotação Cabecalho]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do cabecalho.
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
  "/cotacaocabs/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_apagar"),
  Controller.apaga
);

/**
 * @openapi
 * /cotacaocabs/updatetotal/{id}:
 *  get:
 *    summary: Atualiza Total
 *    description: Atualiza o total do cabecalho de uma cotação pelos itens
 *    tags: [Cotação Cabecalho]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Cotação.
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
  "/cotacaocabs/updatetotal/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.updateTotal
);

module.exports = router;
