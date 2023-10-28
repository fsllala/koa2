const Router = require("koa-router");
const userRouter = new Router({ prefix: "/users" });
const {verifyUser,handlePassword} = require("../middleware/user.middleware.js");

const {create,showAvatarImage} = require("../controller/user.controller.js")

// 注册用户
userRouter.post("/",verifyUser,handlePassword, create);

// 为用户提供头像展示(看图片不需要验证权限)
userRouter.get("/avatar/:userId",showAvatarImage)

module.exports = userRouter;
