const connections = require("../app/database.js");
class CommentService {
  // 数据库插入数据
  async create(content, userId, momentId) {
    const statement = `INSERT INTO comment (content,user_id,moment_id) VALUES (?,?,?)`;
    const [result] = await connections.execute(statement, [content,userId,momentId]);
    return result;
  }
  async reply(content, userId, momentId,commentId) {
    const statement = `INSERT INTO comment (content,user_id,moment_id,comment_id) VALUES (?,?,?,?)`;
    const [result] = await connections.execute(statement, [content,userId,momentId,commentId]);
    return result;
  }
}

module.exports = new CommentService();
