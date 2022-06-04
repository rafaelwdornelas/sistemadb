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
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
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
router.post("/pais/busca", PaisController.buscaRegistroCount);

module.exports = router;