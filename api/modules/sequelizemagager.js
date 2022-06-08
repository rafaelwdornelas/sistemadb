const shell = require("shelljs");
const fs = require("fs");
const database = require("../models");
class sequelizemanager {
    //Função para apagar o banco de dados
    async dropdatabase() {
        var child = shell.exec("yarn sequelize db:drop --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para criar o banco de dados
    async createdatabase() {
        var child = shell.exec("yarn sequelize db:create --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para criar o banco de dados
    async createtables() {
        var child = shell.exec("yarn sequelize db:migrate --debug");
        if (child.code !== 0) {
            throw new Error(child.stderr);
        } else {
            return child.stdout;
        }
    }

    //Função para alimentar as tabelas do banco de dados com dados padrão
    async seedinicial() {
        const dir = "./api/seeders/";
        let retornos = [];
        let seedslists = [];
        let dados = await database["seeds"].findAndCountAll({
            raw: true,
            limit: 1000,
            offset: 0,
            order: [
                ["arquivo", "ASC"]
            ],
        });
        seedslists.push(dados);
        seedslists = seedslists[0].rows;
        seedslists = JSON.stringify(seedslists);
        return new Promise((resolve, reject) => {
            try {
                fs.readdir(dir, (err, arquivos) => {
                    arquivos.forEach(async(arquivo) => {
                        if (seedslists.indexOf(arquivo) === -1) {
                            let retorno = await this.seedid(arquivo);
                            if (retorno.indexOf("migrated") > -1) {
                                retornos.push({ arquivo: arquivo, sucesso: true });
                                await database["seeds"].create({
                                    arquivo: arquivo,
                                });
                            } else {
                                retornos.push({ arquivo: arquivo, sucesso: false });
                            }
                        } else {
                            retornos.push({
                                arquivo: arquivo,
                                sucesso: false,
                                msg: "Arquivo já existe",
                            });
                        }
                        if (retornos.length === arquivos.length) {
                            resolve(retornos);
                        }
                    });
                });
            } catch (error) {
                reject(error.message);
            }
        });
    }

    //carregar seed específica de um arquivo
    async seedid(seed) {
        var child = shell.exec("yarn sequelize db:seed --seed " + seed);
        if (child.code !== 0) {
            return child.stdout;
        } else {
            return child.stdout;
        }
    }

    async seedlist() {
        try {
            const dir = "./api/seeders/";
            let files = await fs.readdirSync(dir);
            return files;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = sequelizemanager;