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
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          type: object
 *          properties:
 *            USERNAME:
 *              summary: Nome de usuário
 *              type: string
 *            SENHA:
 *              summary: Senha do usuário
 *              type: string
 *    responses:
 *      '200':
 *        description: Uma resposta bem-sucedida
 *      '500':
 *        description: Uma resposta de erro
 */
router.post("/login", (req, res) => {
    const user = req.body.USERNAME;
    const senha = req.body.SENHA;

    if (user == "admin" && senha == "admin") {
        // generate an access token
        const accessToken = jwt.sign({ username: user, role: "admin" }, secret, {
            expiresIn: "365d",
        });

        res.json({
            accessToken,
        });
    } else {
        res.status(401).json({
            error: "Usuário ou senha inválidos",
        });
    }
});

module.exports = router;