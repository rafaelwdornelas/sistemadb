/* eslint-disable indent */
const { CnaesServices } = require("../services");
const cnaesServices = new CnaesServices();
const sequelize = require("sequelize");
const { NUMBER } = require("sequelize");

class CnaesController {
    static async pegaTodos(req, res) {
        console.log(req.body.busca, req.body.uf);

        try {
            const retorno = {
                sucesso: true,
                ...(await cnaesServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["id"],
                })),
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        console.log(req.body.busca);
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
        try {
            const retorno = {
                sucesso: true,
                ...(await cnaesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["id"],
                })),
            };
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            return res.status(500).json(retorno);
        }
    }
}

module.exports = CnaesController;