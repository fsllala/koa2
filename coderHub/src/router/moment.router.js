const Router = require("koa-router");
const { vertifyToken } = require("../middleware/auth.middleware");
const {vertifyMomentPermission}= require("../middleware/permission.middleware");
const { postUpdates,list,detail,update,remove} = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

// 发表动态(登录之后才能,引入验证token的中间件)
momentRouter.post("/", vertifyToken, postUpdates);
// 查询动态(这个不登录也能看动态的)
momentRouter.get("/list", list);
// 查询动态详情(这个不登录也能看动态的)
momentRouter.get("/:momentId", detail);
// 修改动态(登录之后才能,引入验证token的中间件)
// 用户登录的id和数据库表中发表此动态的id一致可以修改，否则不能修改
momentRouter.patch("/:momentId", vertifyToken, vertifyMomentPermission,update);
// 删除动态
momentRouter.delete("/:momentId", vertifyToken, vertifyMomentPermission,remove);

module.exports = momentRouter;
