const dotenv = require("dotenv");
dotenv.config(); //将.env中的变量挂载到process.env中
// console.log(process.env.APP_PORT);

const fs = require("fs");
const path = require("path");

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/private.key"));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    SERVER_HOST
} = process.env;

// 这里不能写在module.exports上面,原因可参考模块化规范一文；
module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;