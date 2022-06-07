const shell = require("shelljs");

class sequelizemanager {
    //Função para apagar o banco de dados
    async dropdatabase() {
        if (shell.exec("yarn sequelize db:drop  --debug").code !== 0) {
            shell.echo("Erro:db:drop");
            shell.exit(1);
        } else {
            return true;
        }
    }

    //Função para criar o banco de dados
    async createdatabase() {
        if (shell.exec("yarn sequelize db:create  --debug").code !== 0) {
            shell.echo("Erro:db:create");
            shell.exit(1);
        } else {
            return true;
        }
    }

    //Função para criar o banco de dados
    async createtables() {
        if (shell.exec("yarn sequelize db:migrate --debug").code !== 0) {
            shell.echo("Erro:db:migrate");
            shell.exit(1);
        } else {
            return true;
        }
    }

    //Função para criar o banco de dados
    async seedinicial() {
        if (shell.exec("yarn sequelize db:seed:all --debug").code !== 0) {
            shell.echo("Erro:db:migrate");
            shell.exit(1);
        } else {
            return true;
        }
    }
}

module.exports = sequelizemanager;