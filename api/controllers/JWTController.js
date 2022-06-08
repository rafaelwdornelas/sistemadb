const jwt = require("jsonwebtoken");
require("dotenv").config();
const { globais } = require("../modules");
const moduloglobais = new globais();
class JWTController {
    static async Verifica(req, res, next) {
        const authHeader = req.headers.authorization;
        if (process.env.AUTH_REQUIRED == 0) {
            next();
        } else if (authHeader) {
            const token = authHeader.split(" ")[1];
            const secret = process.env.JWT_SECRET || "secret";
            try {
                let decoded;
                try {
                    decoded = await jwt.verify(token, secret);
                } catch (error) {
                    moduloglobais.log("JWT: Verify ERROR: " + error.message, "error");
                    return res.status(401);
                }

                console.log("JWT: Verify OK");
                req.jwtdados = decoded;
                next();
            } catch (error) {
                moduloglobais.log("JWT: Verify ERROR: " + error.message, "error");
                res.sendStatus(401);
            }
        } else {
            moduloglobais.log("JWT: Verify ERROR: Sem assinatura", "error");
            res.sendStatus(401);
        }
    }
}

module.exports = JWTController;