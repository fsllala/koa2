const errorType = require("../constants/error-types");
const permissionService = require("../service/permission.service");
// 验证登录的id是否有权限更改相关数据
const vertifyMomentPermission = async (ctx, next) => {
  // 上个验证token的中间件在ctx上绑定了userInfo,即登录的用户信息;
  const { id } = ctx.userInfo;
  const { momentId } = ctx.params;
  const result = await permissionService.checkMoment(id, momentId);
  if (result.length === 0) {
    const permissionError = new Error(errorType.NO_PERMISSION);
    return ctx.app.emit("error", permissionError, ctx);
  } else {
    await next();
  }
};

module.exports = {
  vertifyMomentPermission,
};
