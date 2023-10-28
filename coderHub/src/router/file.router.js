const Router = require("koa-router");

const { vertifyToken } = require("../middleware/auth.middleware.js");
const { handleAvatar,handleAvatar2 } = require("../middleware/handleAvatar.middleware.js");
const { uploadAvatar,uploadAvatar2 } = require("../controller/file.controller.js");
const fileRouter = new Router({ prefix: "/file" });

// 上传头像,没有常见的后缀名,即通过接口访问图片地址，不需要后缀
fileRouter.post("/avatar", vertifyToken, handleAvatar, uploadAvatar);

// 上传头像，有常见的后缀名
fileRouter.post("/avatar2", vertifyToken, handleAvatar2, uploadAvatar2);

module.exports = fileRouter;
