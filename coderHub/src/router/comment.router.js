const Router = require("koa-router");
const { vertifyToken } = require("../middleware/auth.middleware");
const { create,reply } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

// 增：新增评论
commentRouter.post("/", vertifyToken, create);

// 增：回复评论
commentRouter.post("/reply", vertifyToken, reply);
module.exports = commentRouter;
