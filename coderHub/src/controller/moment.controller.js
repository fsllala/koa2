const momentService = require("../service/moment.service");
class MomentController {
  // 发表动态
  async postUpdates(ctx, next) {
    // 1.获取动态的内容;
    const { content } = ctx.request.body;
    // 2.动态是谁发布的(谁登录就是谁发布的,验证token的时候再ctx上绑定了userInfo属性);

    const { id } = ctx.userInfo;

    // 3.将动态存储到数据库中;(需要放到service层)
    const result = await momentService.create(content, id);
    // 4.返回数据
    ctx.body = {
      code: 0,
      message: "发布动态成功",
      data: result,
    };
  }

  // 查询动态
  async list(ctx, next) {
    // 获取 size与offset
    const { size, offset } = ctx.query;
    console.log(size, offset);
    const result = await momentService.queryList(size, offset);
    ctx.body = {
      code: 0,
      message: "查询动态成功",
      data: result,
    };
  }

  // 查询动态详情
  async detail(ctx, next) {
    const { momentId } = ctx.params;
    // console.log(momentId);
    const result = await momentService.queryDetailById(momentId);
    ctx.body = {
      code: 0,
      message: "查询动态详情成功",
      data: result,
    };
  }

  // 修改动态
  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await momentService.updateById(content, momentId);
    ctx.body = {
      code: 0,
      message: "修改动态成功",
      data: result,
    };
  }
  // 删除动态
  async remove(ctx, next) {
    const { momentId } = ctx.params;
    const result = await momentService.removeById(momentId);
    ctx.body = {
      code: 0,
      message: "删除动态成功",
      data: result,
    };
  }
}

module.exports = new MomentController();
