/* eslint-disable indent */
const { UnidadesServices } = require("../services");
const unidadesServices = new UnidadesServices();
const sequelize = require("sequelize");
const { globais } = require("../modules");
const moduloglobais = new globais();

class UnidadesController {
    static async pegaTodos(req, res) {
        try {
            const retorno = {
                sucesso: true,
                ...(await unidadesServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["UN_CODIGO"],
                })),
            };
            moduloglobais.log(
                "API: unidadesServices.pegaTodosOsRegistrosPaginacao",
                "info"
            );
            return res.status(200).json(retorno);
        } catch (error) {
            let retorno = {
                sucesso: false,
                msg: error.message,
            };
            moduloglobais.log(
                "API: unidadesServices.pegaTodosOsRegistrosPaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }

    static async buscaRegistroCount(req, res) {
        try {
            const where = {
                UN_DESCRICAO: {
                    [sequelize.Op.like]: `%${req.body.busca}%`,
                },
            };
            const retorno = {
                sucesso: true,
                ...(await unidadesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["UN_CODIGO"],
                })),
            };
            moduloglobais.log(
                "API: unidadesServices.pegaTodosOsRegistrosWherePaginacao, Busca:" +
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
                "API: unidadesServices.pegaTodosOsRegistrosWherePaginacao ERROR: " +
                error.message,
                "error"
            );
            return res.status(500).json(retorno);
        }
    }
}

module.exports = UnidadesController;