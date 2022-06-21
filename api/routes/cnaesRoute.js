const { Router } = require("express");
const CnaesController = require("../controllers/CnaesController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: CNAES
 *   description: Manipulação tabela de Código Nacional de Atividade Econômica
 */

/**
 * @openapi
 * /cnaes:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todos os Códigos CNAE
 *    tags: [CNAES]
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
 *
 */
router.get("/cnaes", CnaesController.pegaTodos);

/**
 * @openapi
 * /cnaes/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca pela descrição do CNAE ou código
 *    tags: [CNAES]
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
 *              example: "BRA"
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
 *
 */
router.post("/cnaes/busca", CnaesController.buscaRegistroCount);

module.exports = router;
