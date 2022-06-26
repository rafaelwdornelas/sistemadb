const { Router } = require("express");
const Pedcompra_StatusController = require("../controllers/Pedcompra_StatusController");
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ped. Compra Status
 *   description: Visualização de status padrão de pedido de compras
 */

/**
 * @openapi
 * /pedcomprastatus:
 *  get:
 *    summary: Todos
 *    description: |
 *      Lista todos os status padrão de pedido de compras
 *    tags: [Ped. Compra Status]
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
router.get("/pedcomprastatus", Pedcompra_StatusController.pegaTodos);

module.exports = router;
