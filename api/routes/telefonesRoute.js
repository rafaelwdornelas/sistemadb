const { Router } = require("express");
const Controller = require("../controllers/TelefonesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Telefones
 *   description: Manipulação de Telefones
 */

/**
 * @openapi
 * /telefones/todos/{id}:
 *  get:
 *    summary: Todos
 *    description: Pega todos telefones de um Cliente utilizando o código do Cliente na busca
 *    tags: [Telefones]
 *    parameters:
 *      - name: id
 *        description: Informe cógigo do cliente.
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
  "/telefones/todos/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /telefones/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os telefones apagados
 *    tags: [Telefones]
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
  "/telefones/apagados",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /telefones/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um telefone apagado
 *    tags: [Telefones]
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
  "/telefones/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /telefones/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um telefone pelo ID
 *    tags: [Telefones]
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
  "/telefones/:id",
  JWTController.Verifica,
  helper.checkPermission("clientes_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /telefones/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo telefone
 *    tags: [Telefones]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            TEL_CLI:
 *              description: Código do Cliente
 *              type: integer
 *            TEL_TIPO:
 *              description: 1-Fixo 2-Celular
 *              type: integer
 *            TEL_DDD:
 *              description: DDD
 *              type: string
 *            TEL_NUMERO:
 *              description: Número
 *              type: string
 *            TEL_RAMAL:
 *              description: Ramal
 *              type: string
 *            TEL_CONTATO:
 *              description: Contato
 *              type: string
 *            TEL_OBS:
 *              description: Observação
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
  "/telefones/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_criar"),
  Controller.cria
);
/**
 * @openapi
 * /telefones/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma telefone deletado
 *    tags: [Telefones]
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
  "/telefones/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /telefones/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um telefone
 *    tags: [Telefones]
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
 *            TEL_CLI:
 *              description: Código do Cliente
 *              type: integer
 *            TEL_TIPO:
 *              description: 1-Fixo 2-Celular
 *              type: integer
 *            TEL_DDD:
 *              description: DDD
 *              type: string
 *            TEL_NUMERO:
 *              description: Número
 *              type: string
 *            TEL_RAMAL:
 *              description: Ramal
 *              type: string
 *            TEL_CONTATO:
 *              description: Contato
 *              type: string
 *            TEL_OBS:
 *              description: Observação
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
  "/telefones/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /telefones/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um telefone
 *    tags: [Telefones]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da Telefone.
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
  "/telefones/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("clientes_apagar"),
  Controller.apaga
);

module.exports = router;
