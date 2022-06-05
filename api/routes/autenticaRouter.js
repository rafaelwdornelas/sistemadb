const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET || "secret";
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Manipulação de Usuarios
 */

/**
 * @openapi
 * /login:
 *  post:
 *    description: Autenticação de Usuário
 *    tags: [Usuarios]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 */
router.post("/login", (req, res) => {
    const user = "notronsite@gmail.com" || req.body.email;

    // generate an access token
    const accessToken = jwt.sign({ username: user, role: "admin" }, secret, {
        expiresIn: "365d",
    });

    res.json({
        accessToken,
    });
});

module.exports = router;