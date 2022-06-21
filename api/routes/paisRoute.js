const { Router } = require("express");
const PaisController = require("../controllers/PaisController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: País
 *   description: Manipulação tabela de País Sped
 */

/**
 * @openapi
 * /pais:
 *  get:
 *    summary: Todos
 *    description: |
 *      Pega todos Países com Paginação
 *    tags: [País]
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
router.get("/pais", PaisController.pegaTodos);

/**
 * @openapi
 * /pais/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca pelo nome do País
 *    tags: [País]
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
router.post("/pais/busca", PaisController.buscaRegistroCount);

module.exports = router;
