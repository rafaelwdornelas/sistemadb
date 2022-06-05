/* eslint-disable indent */
const { MunicipiosServices } = require("../services");
const municipiosServices = new MunicipiosServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class MunicipiosController {
    static async pegaTodos(req, res) {
        const where = {
            MUN_UF: req.body.uf,
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await municipiosServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["MUN_DESC"],
                })),
            };
            moduloglobais.log(
                "API: municipiosServices.pegaTodosOsRegistrosWherePaginacao",
                "error"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: municipiosServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        try {
            const where = {
                MUN_DESC: {
                    [sequelize.Op.like]: `%${req.body.busca}%`,
                },
                MUN_UF: req.body.uf,
            };
            const retorno = {
                sucesso: true,
                ...(await municipiosServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: req.body.inicio,
                    limit: req.body.limit,
                    order: ["MUN_DESC"],
                })),
            };
            moduloglobais.log(
                "API: municipiosServices.pegaTodosOsRegistrosWherePaginacao, Busca: " +
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
                "API: municipiosServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = MunicipiosController;