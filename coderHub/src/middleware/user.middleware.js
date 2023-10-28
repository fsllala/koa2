const errorType = require("../constants/error-types.js");
const { getUserByName } = require("../service/user.service.js");
const md5Password = require("../utils/password-handle.js");
// 用户注册到数据库前的验证操作;
const verifyUser = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  //  1. 验证username，password是否都输入了
  if (!username || !password) {
    const userError = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    // return 结束当前函数执行
    return ctx.app.emit("error", userError, ctx);
  }

  //   2.验证数据库中有没有重名的(user不能一样);
  const result = await getUserByName(username);
  //   console.log(result);
  if (result.length > 0) {
    const userError = new Error(errorType.USER_IS_EXIT);
    // return 结束当前函数执行
    return ctx.app.emit("error", userError, ctx);
  }
  await next();
};



// 密码加密
const handlePassword = async (ctx,next)=>{
    const {password} = ctx.request.body; //获取到未加密的
    ctx.request.body.password= md5Password(password); //将ctx.body上的密码进行加密,然后插入到数据库
    await next();
}

module.exports = {
  verifyUser,
  handlePassword
};
