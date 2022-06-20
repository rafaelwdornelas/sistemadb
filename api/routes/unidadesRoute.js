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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *
 */
router.post("/unidaes/busca", UnidadesController.buscaRegistroCount);

module.exports = router;
