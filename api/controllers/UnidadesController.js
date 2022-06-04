/* eslint-disable indent */
const { UnidadesServices } = require("../services");
const unidadesServices = new UnidadesServices();
const sequelize = require("sequelize");

class UnidadesController {
    static async pegaTodos(req, res) {
        console.log(req.body.busca, req.body.uf);

        try {
            const retorno = {
                sucesso: true,
                ...(await unidadesServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["UN_CODIGO"],
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
            UN_DESCRICAO: {
                [sequelize.Op.like]: `%${req.body.busca}%`,
            },
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await unidadesServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["UN_CODIGO"],
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

module.exports = UnidadesController;