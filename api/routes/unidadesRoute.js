const { Router } = require("express");
const UnidadesController = require("../controllers/UnidadesController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Unidades
 *   description: Manipulação tabela de unidades
 */

/**
 * @openapi
 * /unidaes:
 *  get:
 *    summary: Todos
 *    description: |
 *      Pega todas unidades
 *    tags: [Unidades]
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
router.get("/unidaes", UnidadesController.pegaTodos);

/**
 * @openapi
 * /unidaes/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca pelo nome do País
 *    tags: [Unidades]
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
router.post("/unidaes/busca", UnidadesController.buscaRegistroCount);

module.exports = router;
