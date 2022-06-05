const jwt = require("jsonwebtoken");
require("dotenv").config();
class JWTController {
    static async Verifica(req, res, next) {
        const authHeader = req.headers.authorization;
        if (process.env.AUTH_REQUIRED == 0) {
            next();
        } else if (authHeader) {
            const token = authHeader.split(" ")[1];
            const secret = process.env.JWT_SECRET || "secret";
            try {
                // eslint-disable-next-line no-unused-vars
                await jwt.verify(token, secret, (err, user) => {
                    if (err) {
                        return res.status(403).json(err.message);
                    }
                    //req.user = user;   se quiser enviar o user para o controller
                    next();
                });
            } catch (error) {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }
    }
}

module.exports = JWTController;