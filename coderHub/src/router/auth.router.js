const Router = require("koa-router");
const { vertifyLogin,vertifyToken} = require("../middleware/auth.middleware.js");
const { login } = require("../controller/auth.controller.js");
const authRouter = new Router({ prefix: "/login" });
authRouter.post("/", vertifyLogin, login);
authRouter.get("/", vertifyToken);

module.exports = authRouter;
