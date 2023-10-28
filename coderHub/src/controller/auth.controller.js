const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config.js");

class AuthController {
  async login(ctx, next) {
    // const {username} = ctx.request.body;
    // ctx.body = `欢迎${username}回来~`;
    const { id, name } = ctx.userDatabaseInfo;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });
    //返回对象形式的数据(ES6简写)
    ctx.body = {
      code: 0,
      data: {
        id,
        name,
        token,
      },
    };
  }

}

module.exports = new AuthController();
