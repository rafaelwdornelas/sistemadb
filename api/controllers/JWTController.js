const jwt = require("jsonwebtoken");
class JWTController {
    static async Verifica(req, res, next) {
        const url = req.get("host");
        const authHeader = req.headers.authorization;
        if (url === "localhost:37778" || url === "207.244.230.240:4000") {
            next();
        } else if (authHeader) {
            const token = authHeader.split(" ")[1];
            const secret = "P2ssw0rdxinf3ctxz";
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