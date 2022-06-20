const { Router } = require("express");
const Controller = require("../controllers/TelefonesController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

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
 *        description: Informe cógido do cliente.
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
router.get(
  "/telefones/todos/:id",
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/telefones/apagados",
  JWTController.Verifica,
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
  "/telefones/apagados/:id",
  JWTController.Verifica,
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
router.get("/telefones/:id", JWTController.Verifica, Controller.pega);

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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/telefones/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/telefones/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.put(
  "/telefones/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *      '401':
 *        description: Unauthorized
 *
 */
router.delete(
  "/telefones/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

module.exports = router;
