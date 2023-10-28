const fs= require("fs");
const service = require("../service/user.service.js");
const fileService = require("../service/file.service.js");
class UserController {
  // 因为操作数据库是异步操作的,所以直接用 async 函数; async函数为对象的方法,下面直接module导出了一个对象;
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;
    // 查询数据
    const result = await service.create(user);
    // 返回数据
    ctx.body = result;
  }

  // 用户头像展示
  async showAvatarImage(ctx, next) {
    // 1.获取用户的id
    const { userId } = ctx.params;
    // 2.获取userID对应的头像信息
    const avatarInfo = await fileService.showAvatarImageById(userId);
    console.log(avatarInfo)
    // 3.读取头像所在的文件
    const { filename, mimetype } = avatarInfo;
    // 创建一个可读流
    ctx.body = fs.createReadStream(`./uploads/${filename}`);
    // 设置响应头信息
    ctx.set("Content-Type", mimetype);
  }
}

module.exports = new UserController(); //导出的是一个对象(类的实例)
