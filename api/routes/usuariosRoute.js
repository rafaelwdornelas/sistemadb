const { Router } = require("express");
const Controller = require("../controllers/usuariosController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/usuarios", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /usuarios/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os usuários apagados
 *    tags: [Usuarios]
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/usuarios/apagados",
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/usuarios/apagados/:id",
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/usuarios/:id", JWTController.Verifica, Controller.pega);

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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/usuarios/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/usuarios/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.put(
  "/usuarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.delete(
  "/usuarios/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
