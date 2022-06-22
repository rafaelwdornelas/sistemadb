const RolePermission = require("../models").RolePermission;
const Permission = require("../models").Permission;
const { globais } = require("../modules");
const moduloglobais = new globais();
class Helper {
  constructor() {}

  checkPermission(permName) {
    return (req, res, next) => {
      return new Promise((resolve) => {
        Permission.findOne({
          where: {
            perm_name: permName,
          },
        })
          .then((perm) => {
            RolePermission.findOne({
              where: {
                role_id: req.jwtdados.dados.ROLE_ID,
                perm_id: perm.id,
              },
            })
              .then((rolePermission) => {
                //console.log(rolePermission);
                if (rolePermission) {
                  next();
                  resolve();
                } else {
                  moduloglobais.log(
                    "Roles: Verify ERROR: " + "Sem Permissão",
                    "error"
                  );
                  res.sendStatus(401).end();
                  resolve();
                }
              })
              .catch((error) => {
                moduloglobais.log(
                  "Roles: Verify ERROR: " + error.message,
                  "error"
                );
                res.sendStatus(401).end();
                resolve();
              });
          })
          .catch(() => {
            moduloglobais.log("Roles: Verify ERROR: " + "Forbidden", "error");
            res.sendStatus(401).end();
            resolve();
          });
      });
    };
  }
}

module.exports = Helper;
