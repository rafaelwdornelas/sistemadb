const { Router } = require("express");
const CfopsController = require("../controllers/CfopsController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: CFOPS
 *   description: Manipulação tabela de Código Nacional de Atividade Econômica
 */

/**
 * @openapi
 * /cfops:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todos os Códigos CNAE
 *    tags: [CFOPS]
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
router.get("/cfops", CfopsController.pegaTodos);

/**
 * @openapi
 * /cfops/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca pela descrição do CNAE ou código
 *    tags: [CFOPS]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            busca:
 *              description: string para busca
 *              type: string
 *              example: "PRODUÇÃO RURAL"
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
router.post("/cfops/busca", CfopsController.buscaRegistroCount);

/**
 * @openapi
 * /cfops/{id}:
 *  get:
 *    summary: Visualiza
 *    description: Visualiza os Dados de um CFOP
 *    tags: [CFOPS]
 *    parameters:
 *      - name: id
 *        description: Informe o código CFOP.
 *        required: true
 *        example: 1101
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
router.get("/cfops/:id", CfopsController.pega);

module.exports = router;
