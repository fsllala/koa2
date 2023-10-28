const commentService = require("../service/comment.service");
class CommentController {
  // 发表动态
  async create(ctx, next) {
    // 获取动态的内容,评论动态的Id
    const { content, momentId } = ctx.request.body;
    // 获取动态是谁发布的(谁登录就是谁发布的,验证token的时候再ctx上绑定了userInfo属性);
    const { id } = ctx.userInfo;
    // 将动态存储到数据库中;(需要放到service层)
    const result = await commentService.create(content, id, momentId);
    ctx.body = {
      code: 0,
      message: "发表评论成功",
      data: result,
    };
  }
  // 回复动态
  async reply(ctx, next) {
    // 获取动态的内容,评论动态的Id,回复的Id
    const { content, momentId,commentId } = ctx.request.body;
    // 获取动态是谁发布的(谁登录就是谁发布的,验证token的时候再ctx上绑定了userInfo属性);
    const { id } = ctx.userInfo;
    // 将动态存储到数据库中;(需要放到service层)
    const result = await commentService.reply(content, id, momentId,commentId);
    ctx.body = {
      code: 0,
      message: "回复评论成功",
      data: result,
    };
  }
}

module.exports = new CommentController();
