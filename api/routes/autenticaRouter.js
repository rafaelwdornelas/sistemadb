const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET || "secret";
const usuariosController = require("../controllers/usuariosController");
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
router.post("/login", async (req, res) => {
  const user = req.body.USERNAME;
  const senha = req.body.SENHA;

  if (user == "admin" && senha == "admin") {
    // generate an access token
    const accessToken = jwt.sign({ username: user, role: ["admin"] }, secret, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ username: user, role: ["admin"] }, secret, {
      expiresIn: "1y",
    });
    res.json({
      accessToken,
      refreshToken,
    });
  } else {
    const retorno = await usuariosController.login(user, senha);
    let tempretorno = JSON.stringify(retorno);
    console.log(tempretorno);
    if (tempretorno.indexOf("USERNAME") > -1) {
      // generate an access token
      const accessToken = jwt.sign(
        { username: user, role: ["user"], dados: retorno },
        secret,
        {
          expiresIn: "15m",
        }
      );
      const refreshToken = jwt.sign(
        { username: user, role: "user", dados: retorno },
        secret,
        {
          expiresIn: "1y",
        }
      );

      res.json({
        accessToken,
        refreshToken,
      });
    } else {
      res.status(401).json({
        error: "Usuário ou senha inválidos",
      });
    }
  }
});

module.exports = router;
