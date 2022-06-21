const { Router } = require("express");
const Controller = require("../controllers/LojasController");
const JWTController = require("../controllers/JWTController");
const LicencaController = require("../controllers/LicencaController");

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Lojas
 *   description: Manipulação de Lojas
 */

/**
 * @openapi
 * /lojas:
 *  get:
 *    summary: Todos
 *    description: Pega todas Lojas
 *    tags: [Lojas]
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/lojas", JWTController.Verifica, Controller.pegaTodos);

/**
 * @openapi
 * /lojas/apagados:
 *  get:
 *    summary: Todos apagados
 *    description: Retorna todos os Lojas apagadas
 *    tags: [Lojas]
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/lojas/apagados", JWTController.Verifica, Controller.pegaApagados);

/**
 * @openapi
 * /lojas/apagados/{id}:
 *  get:
 *    summary: Visualiza apagado
 *    description: Visualiza uma loja apagada
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/lojas/apagados/:id",
  JWTController.Verifica,
  Controller.pegaApagado
);
/**
 * @openapi
 * /lojas/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Vizualiza o dado de uma loja pelo ID
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID.
 *        required: true
 *        example: 1
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get("/lojas/:id", JWTController.Verifica, Controller.pega);

/**
 * @openapi
 * /lojas/novo:
 *  post:
 *    summary: Cadastra
 *    description: Cadastra uma nova loja
 *    tags: [Lojas]
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
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/lojas/novo",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.cria
);
/**
 * @openapi
 * /lojas/{id}/restaura:
 *  post:
 *    summary: Restaura Deletado
 *    description: Restaura o cadastro de uma loja deletada
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID no Família
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.post(
  "/lojas/:id/restaura",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.restaura
);
/**
 * @openapi
 * /lojas/{id}:
 *  put:
 *    summary: Altera
 *    description: Altera registro de uma loja
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID na loja.
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
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.put(
  "/lojas/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.atualiza
);
/**
 * @openapi
 * /lojas/{id}:
 *  delete:
 *    summary: Deleta
 *    description: Deleta uma loja
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da loja.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.delete(
  "/lojas/:id",
  LicencaController.Verifica,
  JWTController.Verifica,
  Controller.apaga
);

/**
 * @openapi
 * /lojas/licenca/nova/{id}/{dias}:
 *  get:
 *    summary: Licença Nova
 *    description: Adiciona uma nova licença a uma loja especifica informando o número de dias
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da loja.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *      - name: dias
 *        description: Informe a quantidade de dias para adicionar a licença.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/lojas/licenca/nova/:id/:dias",
  JWTController.Verifica,
  Controller.adicionalicenca
);

/**
 * @openapi
 * /lojas/licenca/verifica/{id}:
 *  get:
 *    summary: Licença Verifica
 *    description: Verifica a licença de uma loja
 *    tags: [Lojas]
 *    parameters:
 *      - name: id
 *        description: Informe o ID da loja.
 *        required: true
 *        in: path
 *        schema:
 *         type: integer
 *     responses:
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
 *      '401':
 *        description: Unauthorized
 *
 */
router.get(
  "/lojas/licenca/verifica/:id",
  JWTController.Verifica,
  Controller.verificalicenca
);

module.exports = router;
