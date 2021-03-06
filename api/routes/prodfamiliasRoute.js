const { Router } = require("express");
const Controller = require("../controllers/prodfamiliasController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Produto Famílias
 *   description: Manipulação de Família de Produtos
 */

/**
 * @openapi
 * /prodfamilias:
 *  get:
 *    summary: Todos
 *    description: Pega todas famílias de Produtos
 *    tags: [Produto Famílias]
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
  "/prodfamilias",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /prodfamilias/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todas as fámilias apagadas
 *    tags: [Produto Famílias]
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
  "/prodfamilias/apagados",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /prodfamilias/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza uma família apagada
 *    tags: [Produto Famílias]
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
  "/prodfamilias/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /prodfamilias/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de uma família pelo ID
 *    tags: [Produto Famílias]
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
  "/prodfamilias/:id",
  JWTController.Verifica,
  helper.checkPermission("produtos_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /prodfamilias/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra uma nova família de Produtos
 *    tags: [Produto Famílias]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            PROD_NOME:
 *              description: Nome da família
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
  "/prodfamilias/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_criar"),
  Controller.cria
);
/**
 * @openapi
 * /prodfamilias/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Produto Famílias]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família
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
  "/prodfamilias/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /prodfamilias/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de uma família de Produtos
 *    tags: [Produto Famílias]
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
 *              description: Nome da família
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
  "/prodfamilias/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /prodfamilias/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta uma família de Produtos
 *    tags: [Produto Famílias]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Família.
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
  "/prodfamilias/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("produtos_apagar"),
  Controller.apaga
);

module.exports = router;
