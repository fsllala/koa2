const serviceFile = require("../service/file.service");
const userService = require("../service/user.service");
const { SERVER_HOST, APP_PORT } = require("../app/config");
class FileController {
  async uploadAvatar(ctx, next) {
    const files = ctx.request.file;
    // console.log(files);
    // 1.获取相应的信息
    const { filename, mimetype, size } = ctx.request.file;
    const { id } = ctx.userInfo;
    // 2.保存到数据库
    const result = await serviceFile.uploadAvatar(filename, mimetype, size, id);

    // 3.将头像地址信息在user表中也存储一份;
    const avatar_url = `${SERVER_HOST}:${APP_PORT}/users/avatar/${id}`;
    await userService.updateUserAvatar(avatar_url, id);
    // 3.返回
    ctx.body = {
      code: 0,
      message: "上传成功",
      data: avatar_url,
    };
  }
  // 有后缀名的头像
  async uploadAvatar2(ctx, next) {
    const files = ctx.request.file;
    // console.log(files);
    // 1.获取相应的信息
    const { filename, mimetype, size } = ctx.request.file;
    const { id } = ctx.userInfo;
    // 2.保存到数据库
    const result = await serviceFile.uploadAvatar(filename, mimetype, size, id);

    // 3.将头像地址信息在user表中也存储一份;
    const avatar_url = `${SERVER_HOST}:${APP_PORT}/${filename}`;
    await userService.updateUserAvatar(avatar_url, id);
    // 3.返回
    ctx.body = {
      code: 0,
      message: "上传成功",
      data: avatar_url,
    };
  }
}

module.exports = new FileController();
