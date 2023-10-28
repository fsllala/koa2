const Koa = require("koa");
const path =require("path");
const static = require("koa-static");
const useRoutes = require("../router/index.js");
const bodyParser= require("koa-bodyparser");
const errorHandler = require("./errorHandler.js");

const app = new Koa();



app.use(bodyParser());
// 注册路由
useRoutes(app); //传参app参数


// 静态资源服务
const filePath = path.resolve(__dirname,"../../uploads");
app.use(static(filePath));

// 错误处理
app.on("error",errorHandler);
module.exports = app;