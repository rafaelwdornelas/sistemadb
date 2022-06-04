/* eslint-disable indent */
const { PaisServices } = require("../services");
const paisServices = new PaisServices();
const sequelize = require("sequelize");

class PaisController {
    static async pegaTodos(req, res) {
        console.log(req.body.busca, req.body.uf);

        try {
            const retorno = {
                sucesso: true,
                ...(await paisServices.pegaTodosOsRegistrosPaginacao({
                    offset: 0,
                    limit: 1000,
                    order: ["PAIS_NOME"],
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
            PAIS_NOME: {
                [sequelize.Op.like]: `%${req.body.busca}%`,
            },
        };
        try {
            const retorno = {
                sucesso: true,
                ...(await paisServices.pegaTodosOsRegistrosWherePaginacao(where, {
                    offset: 0,
                    limit: 1000,
                    order: ["PAIS_NOME"],
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

module.exports = PaisController;