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
 *              description: uf que deseja buscar todos Municipíos
 *              type: string
 *              example: SP
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
 *              description: uf que deseja buscar os Municipíos
 *              type: string
 *              example: SP
 *            busca:
 *              description: string para busca
 *              type: string
 *              example: "CON"
 *            inicio:
 *              description: inicio do index da paginação
 *              type: integer
 *              example: 0
 *            limit:
 *              description: limite de registros da paginação
 *              type: integer
 *              example: 10
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
router.post("/municipios/busca", MunicipiosController.buscaRegistroCount);

module.exports = router;
