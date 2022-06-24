const { Router } = require("express");
const Cotacao_StatusController = require("../controllers/Cotacao_StatusController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cotação Status
 *   description: Visualização de status padrão de cotação
 */

/**
 * @openapi
 * /cotacaostatus:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todos os status padrão de cotação
 *    tags: [Cotação Status]
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
router.get("/cotacaostatus", Cotacao_StatusController.pegaTodos);

module.exports = router;
