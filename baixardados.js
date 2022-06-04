var config = {
    server: "0.0.0.0",
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "P@ssw0rdx",
        },
    },
    options: {
        port: 1433,
        database: "TOTVS12",
        trustServerCertificate: true,
    },
};
const fs = require("fs");
const Request = require("tedious").Request;
const Connection = require("tedious").Connection;
const connection = new Connection(config);
connection.on("connect", (err) => {
    if (err) {
        console.log("Connection Failed");
        throw err;
    }
    executeStatement();
});
connection.connect();

function executeStatement() {
    const request = new Request(
        `SELECT  
	REPLACE(REPLACE([CC3_COD], '/', ''), '-', '')
      ,[CC3_COD]
      ,[CC3_DESC]
  FROM [TOTVS12].[dbo].[CC3990]`,
        (err, rowCount) => {
            if (err) {
                throw err;
            }
            console.log(rowCount + " DONE!");
            connection.close();
        }
    );
    // Emits a 'DoneInProc' event when completed.
    request.on("row", (columns) => {
        let row = {
            id: columns[0].value,
            CN_CODIGO: columns[1].value,
            CN_DESCRICAO: columns[2].value.trim().toUpperCase(),
        };
        let content = JSON.stringify(row);
        content += ",\n";
        fs.appendFile("dados.txt", content, (err) => {
            return console.log(err);
        });
        console.log(row);
    });
    // In SQL Server 2000 you may need: connection.execSqlBatch(request);
    connection.execSql(request);
}