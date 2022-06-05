/* eslint-disable indent */
const { CnaesServices } = require("../services");
const cnaesServices = new CnaesServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class CnaesController {
    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await cnaesServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["id"],
                })),
            };
            moduloglobais.log(
                "API: cnaesServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: cnaesServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        try {
            const where = {
                [sequelize.Op.or]: [{
                        CN_DESCRICAO: {
                            [sequelize.Op.like]: `%${req.body.busca}%`,
                        },
                    },
                    {
                        CN_CODIGO: {
                            [sequelize.Op.like]: `%${req.body.busca}%`,
                        },
                    },
                ],
            };
            const retorno = {
                sucesso: true,
                ...(await cnaesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["id"],
                })),
            };
            moduloglobais.log(
                "API: cnaesServices.pegaTodosOsRegistrosWherePaginacao Busca: " +
                req.body.busca,
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: cnaesServices.pegaTodosOsRegistrosWherePaginacao Busca ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = CnaesController;