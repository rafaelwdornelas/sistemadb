const { Router } = require("express");
const MunicipiosController = require("../controllers/MunicipiosController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Municipíos
 *   description: Manipulação de Municipíos
 */

/**
 * @openapi
 * /municipios:
 *  post:
 *    summary: Visualiza
 *    description: |
 *      Pega todos os Municipíos de um estado
 *      <br><b>uf</b>: UF do estado
 *      <br><b>inicio</b>: Index do inicio da paginação
 *      <br><b>limit</b>: Quantidade de registros por paginação
 *    tags: [Municipíos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            uf:
 *              summary: uf que deseja buscar todos Municipíos
 *              type: string
 *              example: SP
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *
 */
router.post("/municipios", MunicipiosController.pegaTodos);

/**
 * @openapi
 * /municipios/busca:
 *  post:
 *    summary: Busca
 *    description: Realiza uma busca pelo nome do municipio dentro de um estado
 *    tags: [Municipíos]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            uf:
 *              summary: uf que deseja buscar os Municipíos
 *              type: string
 *              example: SP
 *            busca:
 *              summary: string para busca
 *              type: string
 *              example: "CON"
 *            inicio:
 *              summary: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              summary: limite de registros da paginação
 *              type: integer
 *              example: 10
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 *
 */
router.post("/municipios/busca", MunicipiosController.buscaRegistroCount);

module.exports = router;