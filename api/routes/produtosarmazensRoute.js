const { Router } = require("express");
const Controller = require("../controllers/armazensController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produtos Armazens
 *   description: Manipulação de Armazens de Produtos
 */

/**
 * @openapi
 * /armazens:
 *  get:
 *    summary: Todos
 *    description: Pega todos Armazens de Produtos
 *    tags: [Produtos Armazens]
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
  "/armazens",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /armazens/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos armazens de produtos apagadas
 *    tags: [Produtos Armazens]
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
  "/armazens/apagados",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /armazens/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um armazem de produto apagado
 *    tags: [Produtos Armazens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/armazens/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /armazens/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um armazem de produto pelo ID
 *    tags: [Produtos Armazens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/armazens/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /armazens/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo armazem de produto
 *    tags: [Produtos Armazens]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            LOJA:
 *              description: Informe o ID da loja.
 *              type: integer
 *            DESCRICAO:
 *              description: Descrição do armazem de produto
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
  "/armazens/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_criar"),
  Controller.cria
);
/**
 * @openapi
 * /armazens/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de um armazem de produto apagado
 *    tags: [Produtos Armazens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/armazens/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /armazens/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um armazem de produto
 *    tags: [Produtos Armazens]
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
 *              description: Informe o ID da loja.
 *              type: integer
 *            DESCRICAO:
 *              description: Descrição do armazem de produto
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
  "/armazens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /armazens/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um armazem de produto
 *    tags: [Produtos Armazens]
 *    parameters:
 *      - name: id
 *        description: Informe o ID do armazem de produto.
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
  "/armazens/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_apagar"),
  Controller.apaga
);

module.exports = router;
