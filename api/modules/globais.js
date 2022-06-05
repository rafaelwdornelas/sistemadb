/* eslint-disable indent */
const chalk = require("chalk");
const fs = require("fs");
require("dotenv").config();

class globais {
    constructor(name) {
        this.name = name;
    }

    //Função para aguaradar em milisegundos
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    log(texto, tipo) {
        let now = new Date();
        let hora = now.getHours() + "";
        let minuto = now.getMinutes() + "";
        let segundo = now.getSeconds() + "";
        let horario = `${hora.padStart(2, "0")}:${minuto.padStart(
      2,
      "0"
    )}:${segundo.padStart(2, "0")}`;

        if (process.env.LOG_ENABLED) {
            if (process.env.LOG_ERROR_only == 0) {
                SalvaLog(now.toISOString().split("T")[0], `${horario} - ${texto}`);
            } else if (process.env.LOG_ERROR_only == 1 && tipo == "error") {
                SalvaLog(now.toISOString().split("T")[0], `${horario} - ${texto}`);
            }
        }

        switch (tipo) {
            case "info":
                console.log(chalk `{bold.white [!]} ${horario} {blue ${texto}}`);
                break;
            case "error":
                console.log(chalk `{bold.red [x]} ${horario} {red ${texto}}`);
                break;
            case "success":
                console.log(chalk `{bold.white [✓]} ${horario} {green ${texto}}`);
                break;
            case "warning":
                console.log(chalk `{bold.white [#]} ${horario} {yellow ${texto}}`);
                break;
            default:
                console.log(chalk `{bold.white [ ]} ${horario} {white ${texto}}`);
                break;
        }
    }
}
module.exports = globais;

//Função para exibir mensagens no console e salvar o log em arquivo

//Função para salvar logs de retorno em arquivo txt dentro da Pasta Retornos
function SalvaLog(caminho, texto) {
    try {
        if (!fs.existsSync("./logs/")) {
            fs.mkdirSync("./logs/", { recursive: true });
        }
        var logger = fs.createWriteStream(`./logs/${caminho}.log`, {
            flags: "a",
        });
        logger.write(texto + "\r\n");
        logger.end();
    } catch (err) {
        console.log(err);
    }
}