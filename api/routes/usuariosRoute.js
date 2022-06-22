const { Router } = require("express");
const Controller = require("../controllers/usuariosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");
const Helper = require("../modules/helper");
const helper = new Helper();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Manipulação de Usuarios
 */

/**
 * @openapi
 * /usuarios:
 *  get:
 *    summary: Todos
 *    description: Pega todos usuários
 *    tags: [Usuarios]
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
  "/usuarios",
  JWTController.Verifica,
  helper.checkPermission("usuarios_visualizar"),
  Controller.pegaTodos
);

/**
 * @openapi
 * /usuarios/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os usuários apagados
 *    tags: [Usuarios]
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
  "/usuarios/apagados",
  JWTController.Verifica,
  helper.checkPermission("usuarios_visualizar"),
  Controller.pegaApagados
);

/**
 * @openapi
 * /usuarios/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza um usuário apagado
 *    tags: [Usuarios]
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
  "/usuarios/apagados/:id",
  JWTController.Verifica,
  helper.checkPermission("usuarios_visualizar"),
  Controller.pegaApagado
);
/**
 * @openapi
 * /usuarios/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de um usuário pelo ID
 *    tags: [Usuarios]
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
  "/usuarios/:id",
  JWTController.Verifica,
  helper.checkPermission("usuarios_visualizar"),
  Controller.pega
);

/**
 * @openapi
 * /usuarios/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra um novo usuário
 *    tags: [Usuarios]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            USERNAME:
 *              description: Nome de usuário
 *              type: string
 *            SENHA:
 *              description: Senha
 *              type: string
 *            COD_FUNCIONARIO:
 *              description: Código do funcionário
 *              type: integer
 *            ROLE_ID:
 *              description: Código do Role de acesso
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
  "/usuarios/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("usuarios_criar"),
  Controller.cria
);
/**
 * @openapi
 * /usuarios/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma Família Deletada
 *    tags: [Usuarios]
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
  "/usuarios/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("usuarios_alterar"),
  Controller.restaura
);
/**
 * @openapi
 * /usuarios/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de um usuário
 *    tags: [Usuarios]
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
 *            USERNAME:
 *              description: Nome de usuário
 *              type: string
 *            SENHA:
 *              description: Senha
 *              type: string
 *            COD_FUNCIONARIO:
 *              description: Código do funcionário
 *              type: integer
 *            ROLE_ID:
 *              description: Código do Role de acesso
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
  "/usuarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("usuarios_alterar"),
  Controller.atualiza
);
/**
 * @openapi
 * /usuarios/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta um usuário
 *    tags: [Usuarios]
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
  "/usuarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  helper.checkPermission("usuarios_apagar"),
  Controller.apaga
);

module.exports = router;
