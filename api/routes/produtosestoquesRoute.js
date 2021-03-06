const { Router } = require("express");
const Controller = require("../controllers/estoquesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

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
  "/estoques",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaTodos
);

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
  "/estoques/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pega
);

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
 *              description: Armazém do estoque de produto
 *              type: integer
 *            PRODUTO:
 *              description: Código do produto
 *              type: integer
 *            QUANTIDADE:
 *              description: Quantidade do estoque de produto
 *              type: number
 *            FABRICACAO:
 *              description: Data de fabricação do produto
 *              type: string
 *            VALIDADE:
 *              description: Data de validade do produto
 *              type: string
 *            LOTE:
 *              description: Lote do produto
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
  "/estoques/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_criar"),
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
 *              description: Armazém do estoque de produto
 *              type: integer
 *            PRODUTO:
 *              description: Código do produto
 *              type: integer
 *            QUANTIDADE:
 *              description: Quantidade do estoque de produto
 *              type: number
 *            FABRICACAO:
 *              description: Data de fabricação do produto
 *              type: string
 *            VALIDADE:
 *              description: Data de validade do produto
 *              type: string
 *            LOTE:
 *              description: Lote do produto
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
  "/estoques/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_alterar"),
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
  "/estoques/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_apagar"),
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
  "/estoques/saldo/all/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
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
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *      - name: id
 *        description: Informe o ID do produto.
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
  "/estoques/saldo/:armazem/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
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
 *        example: 20300518
 *        in: path
 *        schema:
 *         type: string
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
  "/estoques/validade/all/:data",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
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
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *      - name: data
 *        description: Informe a data de vencimento máxima YYYYMMDD.
 *        required: true
 *        example: 20300518
 *        in: path
 *        schema:
 *         type: string
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
  "/estoques/validade/:armazem/:data",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.getvalidadeprodutoarmazem
);

/**
 * @openapi
 * /estoques/retirada:
 *  post:
 *    summary: Retirada
 *    description: Retira um produto do estoque
 *    tags: [Produtos Estoques]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            armazem:
 *              description: Armazém do estoque de produto
 *              type: integer
 *            id:
 *              description: Código do produto
 *              type: integer
 *            quantidade:
 *              description: Quantidade do estoque de produto
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
  "/estoques/retirada",
  JWTController.Verifica,
  helper.checkPermission("produtos_movimenta"),
  Controller.retiradadeproduto
);

module.exports = router;
