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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *              summary: string para busca
 *              type: string
 *              example: "BRA"
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *
 */
router.post("/cnaes/busca", CnaesController.buscaRegistroCount);

module.exports = router;