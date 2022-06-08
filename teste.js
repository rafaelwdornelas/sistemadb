const fs = require("fs");

const dir = "./api/seeders/";
let files = fs.readdirSync(dir);
console.log(files);