const errorType = require("../constants/error-types.js");
const errorHandler = (error, ctx) => {
  //通过 message接收传过来的错误
  // console.log(error.message);
  let status, message;

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; //Bad Request
      message = "用户名或密码不能为空";
      break;
    case errorType.USER_IS_EXIT:
      status = 409; //conflict
      message = "用户名已存在~";
      break;
    case errorType.USER_IS_NOT_EXIT:
      status = 400; //请求参数错误
      message = "用户不存在";
      break;
    case errorType.PASSWORD_IS_INCORRENT:
      status = 400; //请求参数错误
      message = "用户名或密码错误";
      break;
    case errorType.UNAUTHORIZATION:
      status = 401; 
      message = "无效的token~";
      break;
    case errorType.NO_PERMISSION:
      status = 403; 
      message = "权限不足~";
      break;
    default:
      status = 404;
      message = "发生错误了~";
      break;
  }
  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
