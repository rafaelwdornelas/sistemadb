const { Router } = require("express");
const Controller = require("../controllers/Pedcompra_CabsController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Ped. Compra Cabecalho
 *   description: Manipulação de cabecalho de pedido de compras
 */

/**
 * @openapi
 * /pedcompracabs:
 *  post:
 *    summary: Todos
 *    description: Pega todos cabecalhos de pedido de compras
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /pedcompracabs/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os cabecalhos apagados
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/apagados",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /pedcompracabs/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um cabecalho apagado
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /pedcompracabs/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um cabecalho pelo ID
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /pedcompracabs/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo cabecalho de pedido de compras
 *    tags: [Ped. Compra Cabecalho]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            LOJA:
 *              description: Informe o ID da Loja.
 *              type: integer
 *            FORNECEDOR:
 *              description:  Informe o ID do fornecedor.
 *              type: integer
 *            SOLICITANTE:
 *              description: Informe o ID do funcionário.
 *              type: integer
 *            APROVADOR:
 *              description: Informe o ID do funcionário.
 *              type: integer
 *            STATUS:
 *              description: Informe o status do pedido de compra.
 *              type: integer
 *            DATAAPROVADO:
 *              description:  Informe a data da aprovação. YYYYMMDD
 *              type: string
 *            VALORMERCADORIAS:
 *              description: Informe o valor das mercadorias.
 *              type: number
 *            VALORTAXAS:
 *              description: Informe o valor das taxas.
 *              type: number
 *            VALORTOTAL:
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
  "/pedcompracabs/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_criar"),
  Controller.cria
);
/**
 * @openapi
 * /pedcompracabs/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um cabecalho Deletado
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /pedcompracabs/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um cabecalho
 *    tags: [Ped. Compra Cabecalho]
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
 *            LOJA:
 *              description: Informe o ID da Loja.
 *              type: integer
 *            FORNECEDOR:
 *              description:  Informe o ID do fornecedor.
 *              type: integer
 *            SOLICITANTE:
 *              description: Informe o ID do funcionário.
 *              type: integer
 *            APROVADOR:
 *              description: Informe o ID do funcionário.
 *              type: integer
 *            STATUS:
 *              description: Informe o status do pedido de compra.
 *              type: integer
 *            DATAAPROVADO:
 *              description:  Informe a data da aprovação. YYYYMMDD
 *              type: string
 *            VALORMERCADORIAS:
 *              description: Informe o valor das mercadorias.
 *              type: number
 *            VALORTAXAS:
 *              description: Informe o valor das taxas.
 *              type: number
 *            VALORTOTAL:
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
  "/pedcompracabs/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /pedcompracabs/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um cabecalho
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("pedidos_apagar"),
  Controller.apaga
);

/**
 * @openapi
 * /pedcompracabs/updatetotal/{id}:
 *  get:
 *    summary: Atualiza Total
 *    description: Atualiza o total do cabecalho de um pedido de compras pelos itens
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/updatetotal/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_alterar"),
  Controller.updateTotal
);

/**
 * @openapi
 * /pedcompracabs/visualiza/{id}:
 *  get:
 *    summary: Visualiza Tudo
 *    description: Visualiza todos os itens de uma pedido de compras
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/visualiza/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.carregacotacao
);

/**
 * @openapi
 * /pedcompracabs/imprimir/{id}:
 *  get:
 *    summary: Imprimir
 *    description: Gera o PDF da pedido de compras para impressão, basta apenas jogar o retorno para uma nova aba do navegador para visualizar o arquivo
 *    tags: [Ped. Compra Cabecalho]
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
  "/pedcompracabs/imprimir/:id",
  JWTController.Verifica,
  helper.checkPermission("pedidos_visualizar"),
  Controller.imprimir
);

module.exports = router;
