const errorType = require("../constants/error-types.js");
const { getUserByName } = require("../service/user.service.js");
const md5Password = require("../utils/password-handle.js");
const jwt = require("jsonwebtoken");
const { PUBLIC_KEY } = require("../app/config.js");
const vertifyLogin = async (ctx, next) => {
  // 获取用户名与密码
  const { username, password } = ctx.request.body;
  // 判断用户名与密码是否为空
  if (!username || !password) {
    const userError = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    // return 结束当前函数执行
    return ctx.app.emit("error", userError, ctx);
  }
  // 判断用户名是否存在
  const result = await getUserByName(username);
  console.log(result);
  if (result.length === 0) {
    const userError = new Error(errorType.USER_IS_NOT_EXIT);
    // return 结束当前函数执行
    return ctx.app.emit("error", userError, ctx);
  }

  // 判断用户输入的密码是否和数据库中的密码一致(加密处理)
  const userDatabaseInfo = result[0];
  if (userDatabaseInfo.password !== md5Password(password)) {
    const userError = new Error(errorType.PASSWORD_IS_INCORRENT);
    return ctx.app.emit("error", userError, ctx);
  }
  // 将user绑定在ctx对象上,用于controller获取用户数据
  ctx.userDatabaseInfo = userDatabaseInfo;
  await next();
};

// 验证token是否有效
const vertifyToken = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  // 验证是否携带TOKEN
  if(!authorization){
    const tokenError = new Error(errorType.UNAUTHORIZATION);
    return ctx.app.emit("error", tokenError, ctx);
  }
  // 此时的token多一个"Bearer ",去掉;
  const token = authorization.replace("Bearer ", "");
  // 认证token 通过 jwt.verify(token,key); 使用公钥进行解密,并告诉其加密算法;
  try {
    // 获取到token中信息(id.name...)
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //这里algorithms是个复数,所以需要传入数组;
    });
    // 将token信息保留下来,以便后续使用
    ctx.userInfo = result;

    // 执行下一个中间件;
    await next();
  } catch (error) {
    console.log(error)
    const tokenError = new Error(errorType.UNAUTHORIZATION);
    return ctx.app.emit("error", tokenError, ctx);
  }
};


module.exports = {
  vertifyLogin,
  vertifyToken,
};
