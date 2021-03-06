/* eslint-disable indent */
const { PaisServices } = require("../services");
const paisServices = new PaisServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class PaisController {
    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await paisServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["PAIS_NOME"],
                })),
            };
            moduloglobais.log(
                "API: paisServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: paisServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        try {
            const where = {
                PAIS_NOME: {
                    [sequelize.Op.like]: `%${req.body.busca}%`,
                },
            };
            const retorno = {
                sucesso: true,
                ...(await paisServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["PAIS_NOME"],
                })),
            };
            moduloglobais.log(
                "API: paisServices.pegaTodosOsRegistrosWherePaginacao BUSCA: " +
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
                "API: paisServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = PaisController;