/* eslint-disable indent */
const { MunicipiosServices } = require("../services");
const clientesServices = new MunicipiosServices();
const sequelize = require("sequelize");

class MunicipiosController {
    static async pegaTodos(req, res) {
        console.log(req.body.busca, req.body.uf);
        const where = {
            MUN_UF: req.body.uf,
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["MUN_DESC"],
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
        console.log(req.body.busca, req.body.uf);
        const where = {
            MUN_DESC: {
                [sequelize.Op.like]: `%${req.body.busca}%`,
            },
            MUN_UF: req.body.uf,
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await clientesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: req.body.inicio,
                    limit: req.body.limit,
                    order: ["MUN_DESC"],
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

module.exports = MunicipiosController;