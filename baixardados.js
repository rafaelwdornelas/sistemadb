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
        [AH_UNIMED]
        ,[AH_DESCPO]
    FROM [TOTVS12].[dbo].[SAH990]`,
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
            UN_CODIGO: columns[0].value,
            UN_DESCRICAO: columns[1].value.trim().toUpperCase(),
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